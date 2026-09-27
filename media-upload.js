/* =============================================================
   OK복덕방 — 매물 사진·동영상 업로드 시스템 (media-upload.js)
   window.MediaUpload IIFE 모듈
   - 사진 최대 20장 (JPG/PNG/WEBP/GIF, 파일당 10MB)
   - 동영상 1개 (MP4/MOV/AVI, 최대 200MB, 최대 5분)
   - 드래그&드롭 + 클릭 업로드
   - 썸네일 미리보기, 삭제, 순서 변경 (첫 번째 = 대표사진)
   - localStorage 기반 (실제 서버 없음 - Base64 저장)
   ============================================================= */
(function(w){
  'use strict';

  /* ── 상수 ─────────────────────────────────────────── */
  var MAX_PHOTOS   = 20;
  var MAX_PHOTO_MB = 10;
  var MAX_VIDEO_MB = 200;
  var PHOTO_EXTS   = ['jpg','jpeg','png','webp','gif','heic'];
  var VIDEO_EXTS   = ['mp4','mov','avi','webm','mkv'];

  /* ── localStorage 헬퍼 ──────────────────────────────── */
  function store(k, v){
    try {
      if(v === undefined) return JSON.parse(localStorage.getItem('mu_' + k) || 'null');
      localStorage.setItem('mu_' + k, JSON.stringify(v));
    } catch(e){ return null; }
  }

  /* ── 미디어 데이터 조회/저장 ─────────────────────────── */
  function getMedia(listingId){
    return store('media_' + listingId) || { photos: [], video: null };
  }
  function saveMedia(listingId, data){
    store('media_' + listingId, data);
  }
  function clearMedia(listingId){
    try { localStorage.removeItem('mu_media_' + listingId); } catch(e){}
  }

  /* ── 파일 크기 포맷 ──────────────────────────────────── */
  function fmtSize(bytes){
    if(bytes < 1024)       return bytes + 'B';
    if(bytes < 1048576)    return (bytes/1024).toFixed(1) + 'KB';
    return (bytes/1048576).toFixed(1) + 'MB';
  }

  /* ── 파일 확장자 ─────────────────────────────────────── */
  function ext(name){ return (name||'').split('.').pop().toLowerCase(); }
  function isPhoto(name){ return PHOTO_EXTS.indexOf(ext(name)) !== -1; }
  function isVideo(name){ return VIDEO_EXTS.indexOf(ext(name)) !== -1; }

  /* ── genId ──────────────────────────────────────────── */
  function genId(){ return 'MU' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).slice(2,5).toUpperCase(); }

  /* ── CSS 삽입 ────────────────────────────────────────── */
  function injectStyles(){
    if(document.getElementById('mu-styles')) return;
    var s = document.createElement('style');
    s.id = 'mu-styles';
    s.textContent = [
      '.mu-wrap{font-family:-apple-system,sans-serif;}',

      /* 드롭존 */
      '.mu-dropzone{border:2px dashed #BDC3C7;border-radius:12px;padding:28px 18px;text-align:center;cursor:pointer;transition:all .2s;background:#fafafa;position:relative;}',
      '.mu-dropzone:hover,.mu-dropzone.drag-over{border-color:#1B4F8A;background:#EBF3FB;}',
      '.mu-dropzone input[type=file]{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%;}',
      '.mu-dz-icon{font-size:32px;margin-bottom:8px;}',
      '.mu-dz-text{font-size:14px;color:#555;line-height:1.5;}',
      '.mu-dz-sub{font-size:12px;color:#999;margin-top:4px;}',

      /* 사진 그리드 */
      '.mu-photo-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:10px;margin-top:14px;}',
      '.mu-photo-item{position:relative;border-radius:8px;overflow:hidden;background:#f0f0f0;aspect-ratio:1;border:2px solid transparent;transition:border-color .2s;}',
      '.mu-photo-item.first-photo{border-color:#1B4F8A;}',
      '.mu-photo-item img{width:100%;height:100%;object-fit:cover;display:block;}',
      '.mu-photo-item .mu-del{position:absolute;top:4px;right:4px;background:rgba(0,0,0,.55);color:#fff;border:none;border-radius:50%;width:22px;height:22px;font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;}',
      '.mu-photo-item .mu-del:hover{background:rgba(192,57,43,.9);}',
      '.mu-photo-item .mu-badge{position:absolute;bottom:4px;left:4px;background:rgba(27,79,138,.85);color:#fff;font-size:10px;padding:2px 6px;border-radius:4px;}',
      '.mu-photo-item .mu-move{position:absolute;top:4px;left:4px;background:rgba(0,0,0,.45);color:#fff;border:none;border-radius:4px;padding:2px 5px;font-size:11px;cursor:grab;display:flex;gap:2px;}',

      /* 동영상 */
      '.mu-video-box{margin-top:16px;border:2px dashed #BDC3C7;border-radius:12px;padding:18px;background:#fafafa;position:relative;}',
      '.mu-video-box.has-video{border-color:#1B6B3A;background:#EDF8F1;}',
      '.mu-video-preview{width:100%;border-radius:8px;max-height:220px;background:#000;}',
      '.mu-video-info{display:flex;align-items:center;gap:10px;margin-top:10px;font-size:13px;}',
      '.mu-video-name{flex:1;color:#333;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
      '.mu-video-size{color:#888;font-size:12px;white-space:nowrap;}',
      '.mu-video-del{background:#c0392b;color:#fff;border:none;border-radius:6px;padding:4px 10px;font-size:12px;cursor:pointer;}',
      '.mu-video-del:hover{background:#a93226;}',
      '.mu-video-input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%;}',

      /* 카운터 */
      '.mu-counter{font-size:12px;color:#888;margin-top:6px;display:flex;justify-content:space-between;}',
      '.mu-counter .warn{color:#c0392b;font-weight:600;}',

      /* 안내 배너 */
      '.mu-tip{background:#EBF3FB;border-radius:8px;padding:10px 14px;font-size:12.5px;color:#1B4F8A;line-height:1.6;margin-bottom:12px;}',
      '.mu-tip b{font-weight:700;}',

      /* 업로드 중 */
      '.mu-loading{display:flex;align-items:center;justify-content:center;gap:8px;padding:14px;font-size:13px;color:#1B4F8A;}',
      '@keyframes mu-spin{to{transform:rotate(360deg)}}',
      '.mu-spinner{width:18px;height:18px;border:2px solid #BDC3C7;border-top-color:#1B4F8A;border-radius:50%;animation:mu-spin .7s linear infinite;}',

      /* 에러 */
      '.mu-err{background:#FEF0F0;border-radius:8px;padding:10px 14px;font-size:12.5px;color:#c0392b;margin-top:8px;}',

      /* 빈 상태 */
      '.mu-empty{text-align:center;padding:20px;color:#aaa;font-size:13px;}'
    ].join('');
    document.head.appendChild(s);
  }

  /* ── 사진 패널 렌더 ──────────────────────────────────── */
  function renderPhotoPanel(listingId){
    injectStyles();
    var id = 'mu-photo-' + listingId;
    return [
      '<div class="mu-wrap" id="' + id + '">',
        '<div class="mu-tip">',
          '📷 <b>사진 등록 안내:</b> 최대 <b>' + MAX_PHOTOS + '장</b> 첨부 가능 (JPG·PNG·WEBP·GIF, 장당 최대 ' + MAX_PHOTO_MB + 'MB) ',
          '— 첫 번째 사진이 <b>대표사진</b>으로 검색 결과에 표시됩니다. 드래그하여 순서를 변경할 수 있습니다.',
        '</div>',
        '<div class="mu-dropzone" id="mu-dz-' + listingId + '">',
          '<input type="file" id="mu-file-photo-' + listingId + '" accept="image/*" multiple>',
          '<div class="mu-dz-icon">🖼️</div>',
          '<div class="mu-dz-text"><b>사진을 여기에 드래그하거나 클릭하여 선택</b></div>',
          '<div class="mu-dz-sub">JPG, PNG, WEBP, GIF · 최대 ' + MAX_PHOTO_MB + 'MB/장 · 최대 ' + MAX_PHOTOS + '장</div>',
        '</div>',
        '<div class="mu-counter" id="mu-cnt-' + listingId + '">',
          '<span>등록된 사진: <b id="mu-cnt-num-' + listingId + '">0</b>/' + MAX_PHOTOS + '장</span>',
          '<span id="mu-cnt-warn-' + listingId + '"></span>',
        '</div>',
        '<div class="mu-photo-grid" id="mu-grid-' + listingId + '"></div>',
        '<div id="mu-photo-err-' + listingId + '"></div>',
      '</div>'
    ].join('');
  }

  /* ── 동영상 패널 렌더 ────────────────────────────────── */
  function renderVideoPanel(listingId){
    injectStyles();
    var id = 'mu-video-' + listingId;
    return [
      '<div class="mu-wrap" id="' + id + '">',
        '<div class="mu-tip">',
          '🎬 <b>동영상 등록 안내:</b> 매물 내·외부 영상을 등록하면 방문 전 확인에 도움이 됩니다. ',
          '최대 <b>1개</b> (MP4·MOV·AVI·WEBM, 최대 ' + MAX_VIDEO_MB + 'MB, 5분 이내 권장)',
        '</div>',
        '<div class="mu-video-box" id="mu-vbox-' + listingId + '">',
          '<input type="file" class="mu-video-input" id="mu-file-video-' + listingId + '" accept="video/*">',
          '<div id="mu-vinner-' + listingId + '">',
            '<div style="text-align:center;pointer-events:none;">',
              '<div style="font-size:28px;margin-bottom:8px;">🎥</div>',
              '<div style="font-size:14px;color:#555;"><b>동영상을 여기에 드래그하거나 클릭</b></div>',
              '<div style="font-size:12px;color:#999;margin-top:4px;">MP4, MOV, AVI, WEBM · 최대 ' + MAX_VIDEO_MB + 'MB</div>',
            '</div>',
          '</div>',
        '</div>',
        '<div id="mu-video-err-' + listingId + '"></div>',
      '</div>'
    ].join('');
  }

  /* ── 그리드 업데이트 ─────────────────────────────────── */
  function updatePhotoGrid(listingId){
    var grid  = document.getElementById('mu-grid-' + listingId);
    var cnt   = document.getElementById('mu-cnt-num-' + listingId);
    var warn  = document.getElementById('mu-cnt-warn-' + listingId);
    if(!grid) return;

    var media = getMedia(listingId);
    var photos = media.photos || [];

    if(cnt) cnt.textContent = photos.length;
    if(warn){
      if(photos.length >= MAX_PHOTOS){
        warn.innerHTML = '<span class="warn">최대 ' + MAX_PHOTOS + '장 도달</span>';
      } else if(photos.length >= MAX_PHOTOS - 3){
        warn.innerHTML = '<span class="warn">' + (MAX_PHOTOS - photos.length) + '장 더 추가 가능</span>';
      } else {
        warn.textContent = '';
      }
    }

    if(photos.length === 0){
      grid.innerHTML = '';
      return;
    }

    var html = '';
    photos.forEach(function(p, i){
      html += '<div class="mu-photo-item' + (i===0?' first-photo':'') + '" data-idx="' + i + '" draggable="true">';
      html += '<img src="' + p.dataUrl + '" alt="사진 ' + (i+1) + '">';
      // 순서 이동 버튼
      html += '<div class="mu-move" title="순서 변경">';
      if(i > 0) html += '<button onclick="MediaUpload.movePhoto(\'' + listingId + '\',' + i + ',' + (i-1) + ')" title="앞으로">◀</button>';
      if(i < photos.length-1) html += '<button onclick="MediaUpload.movePhoto(\'' + listingId + '\',' + i + ',' + (i+1) + ')" title="뒤로">▶</button>';
      html += '</div>';
      // 대표사진 배지
      if(i === 0) html += '<div class="mu-badge">대표</div>';
      // 삭제
      html += '<button class="mu-del" onclick="MediaUpload.removePhoto(\'' + listingId + '\',' + i + ')" title="삭제">✕</button>';
      html += '</div>';
    });
    grid.innerHTML = html;

    // 드래그&드롭 순서 변경
    bindDragSort(listingId, grid);
  }

  /* ── 드래그&드롭 정렬 ────────────────────────────────── */
  function bindDragSort(listingId, grid){
    var items = grid.querySelectorAll('.mu-photo-item');
    var dragSrc = null;

    Array.prototype.forEach.call(items, function(item){
      item.addEventListener('dragstart', function(e){
        dragSrc = this;
        e.dataTransfer.effectAllowed = 'move';
        this.style.opacity = '0.5';
      });
      item.addEventListener('dragend', function(){
        this.style.opacity = '1';
        Array.prototype.forEach.call(grid.querySelectorAll('.mu-photo-item'), function(el){ el.classList.remove('drag-over'); });
      });
      item.addEventListener('dragover', function(e){
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        this.classList.add('drag-over');
        return false;
      });
      item.addEventListener('dragleave', function(){ this.classList.remove('drag-over'); });
      item.addEventListener('drop', function(e){
        e.stopPropagation();
        if(dragSrc !== this){
          var fromIdx = parseInt(dragSrc.dataset.idx);
          var toIdx   = parseInt(this.dataset.idx);
          movePhoto(listingId, fromIdx, toIdx);
        }
        return false;
      });
    });
  }

  /* ── 사진 순서 이동 ─────────────────────────────────── */
  function movePhoto(listingId, fromIdx, toIdx){
    var media = getMedia(listingId);
    var photos = media.photos;
    if(fromIdx < 0 || toIdx < 0 || fromIdx >= photos.length || toIdx >= photos.length) return;
    var moved = photos.splice(fromIdx, 1)[0];
    photos.splice(toIdx, 0, moved);
    media.photos = photos;
    saveMedia(listingId, media);
    updatePhotoGrid(listingId);
  }

  /* ── 사진 삭제 ──────────────────────────────────────── */
  function removePhoto(listingId, idx){
    var media = getMedia(listingId);
    media.photos.splice(idx, 1);
    saveMedia(listingId, media);
    updatePhotoGrid(listingId);
  }

  /* ── 동영상 UI 업데이트 ──────────────────────────────── */
  function updateVideoUI(listingId){
    var vbox   = document.getElementById('mu-vbox-' + listingId);
    var vinner = document.getElementById('mu-vinner-' + listingId);
    if(!vbox || !vinner) return;

    var media = getMedia(listingId);
    var video = media.video;

    if(!video){
      vbox.classList.remove('has-video');
      vinner.innerHTML = [
        '<div style="text-align:center;pointer-events:none;">',
          '<div style="font-size:28px;margin-bottom:8px;">🎥</div>',
          '<div style="font-size:14px;color:#555;"><b>동영상을 여기에 드래그하거나 클릭</b></div>',
          '<div style="font-size:12px;color:#999;margin-top:4px;">MP4, MOV, AVI, WEBM · 최대 ' + MAX_VIDEO_MB + 'MB</div>',
        '</div>'
      ].join('');
      return;
    }

    vbox.classList.add('has-video');
    vinner.innerHTML = [
      '<video class="mu-video-preview" controls src="' + video.dataUrl + '"></video>',
      '<div class="mu-video-info">',
        '<div class="mu-video-name">🎬 ' + video.name + '</div>',
        '<div class="mu-video-size">' + fmtSize(video.size) + '</div>',
        '<button class="mu-video-del" onclick="MediaUpload.removeVideo(\'' + listingId + '\')">삭제</button>',
      '</div>'
    ].join('');
  }

  /* ── 동영상 삭제 ────────────────────────────────────── */
  function removeVideo(listingId){
    var media = getMedia(listingId);
    media.video = null;
    saveMedia(listingId, media);
    updateVideoUI(listingId);
  }

  /* ── 에러 메시지 표시 ────────────────────────────────── */
  function showErr(errId, msg){
    var el = document.getElementById(errId);
    if(!el) return;
    el.innerHTML = '<div class="mu-err">⚠️ ' + msg + '</div>';
    setTimeout(function(){ if(el) el.innerHTML = ''; }, 4000);
  }

  /* ── 사진 파일 처리 ─────────────────────────────────── */
  function handlePhotoFiles(listingId, files){
    var media  = getMedia(listingId);
    var photos = media.photos || [];
    var errId  = 'mu-photo-err-' + listingId;
    var errs   = [];
    var pending = 0;

    Array.prototype.forEach.call(files, function(file){
      if(photos.length + pending >= MAX_PHOTOS){
        errs.push('최대 ' + MAX_PHOTOS + '장까지 등록 가능합니다.');
        return;
      }
      if(!isPhoto(file.name) && file.type.indexOf('image/') !== 0){
        errs.push('"' + file.name + '" — 이미지 파일이 아닙니다.');
        return;
      }
      if(file.size > MAX_PHOTO_MB * 1024 * 1024){
        errs.push('"' + file.name + '" — ' + MAX_PHOTO_MB + 'MB를 초과합니다(' + fmtSize(file.size) + ').');
        return;
      }
      pending++;
      var reader = new FileReader();
      reader.onload = function(e){
        var media2 = getMedia(listingId);
        if(media2.photos.length >= MAX_PHOTOS) return;
        media2.photos.push({
          id:      genId(),
          name:    file.name,
          size:    file.size,
          type:    file.type,
          dataUrl: e.target.result,
          addedAt: new Date().toISOString()
        });
        saveMedia(listingId, media2);
        updatePhotoGrid(listingId);
      };
      reader.readAsDataURL(file);
    });

    if(errs.length) showErr(errId, errs[0]);
  }

  /* ── 동영상 파일 처리 ────────────────────────────────── */
  function handleVideoFile(listingId, file){
    var errId = 'mu-video-err-' + listingId;
    if(!isVideo(file.name) && file.type.indexOf('video/') !== 0){
      showErr(errId, '"' + file.name + '" — 동영상 파일이 아닙니다. (MP4, MOV, AVI, WEBM 지원)');
      return;
    }
    if(file.size > MAX_VIDEO_MB * 1024 * 1024){
      showErr(errId, '"' + file.name + '" — ' + MAX_VIDEO_MB + 'MB를 초과합니다(' + fmtSize(file.size) + '). 파일을 압축하거나 짧게 편집해주세요.');
      return;
    }

    // 로딩 표시
    var vinner = document.getElementById('mu-vinner-' + listingId);
    if(vinner) vinner.innerHTML = '<div class="mu-loading"><div class="mu-spinner"></div> 동영상 처리 중...</div>';

    var reader = new FileReader();
    reader.onload = function(e){
      var media = getMedia(listingId);
      media.video = {
        id:      genId(),
        name:    file.name,
        size:    file.size,
        type:    file.type,
        dataUrl: e.target.result,
        addedAt: new Date().toISOString()
      };
      saveMedia(listingId, media);
      updateVideoUI(listingId);
    };
    reader.onerror = function(){
      showErr(errId, '동영상 파일을 읽는 중 오류가 발생했습니다. 다시 시도해주세요.');
      updateVideoUI(listingId);
    };
    reader.readAsDataURL(file);
  }

  /* ── 이벤트 바인딩 ──────────────────────────────────── */
  function bindPhotoEvents(listingId){
    // 사진 파일 선택
    var fileInput = document.getElementById('mu-file-photo-' + listingId);
    if(fileInput){
      fileInput.addEventListener('change', function(){
        if(this.files && this.files.length) handlePhotoFiles(listingId, this.files);
        this.value = '';
      });
    }

    // 드롭존 드래그&드롭
    var dz = document.getElementById('mu-dz-' + listingId);
    if(dz){
      dz.addEventListener('dragover', function(e){
        e.preventDefault();
        dz.classList.add('drag-over');
      });
      dz.addEventListener('dragleave', function(){
        dz.classList.remove('drag-over');
      });
      dz.addEventListener('drop', function(e){
        e.preventDefault();
        dz.classList.remove('drag-over');
        var dt = e.dataTransfer;
        if(dt && dt.files && dt.files.length){
          var imgFiles = Array.prototype.filter.call(dt.files, function(f){ return f.type.indexOf('image/')===0 || isPhoto(f.name); });
          if(imgFiles.length) handlePhotoFiles(listingId, imgFiles);
        }
      });
    }
  }

  function bindVideoEvents(listingId){
    var fileInput = document.getElementById('mu-file-video-' + listingId);
    if(fileInput){
      fileInput.addEventListener('change', function(){
        if(this.files && this.files.length) handleVideoFile(listingId, this.files[0]);
        this.value = '';
      });
    }

    var vbox = document.getElementById('mu-vbox-' + listingId);
    if(vbox){
      vbox.addEventListener('dragover', function(e){
        e.preventDefault();
        vbox.classList.add('drag-over');
      });
      vbox.addEventListener('dragleave', function(){
        vbox.classList.remove('drag-over');
      });
      vbox.addEventListener('drop', function(e){
        e.preventDefault();
        vbox.classList.remove('drag-over');
        var dt = e.dataTransfer;
        if(dt && dt.files && dt.files.length){
          var vidFile = Array.prototype.filter.call(dt.files, function(f){ return f.type.indexOf('video/')===0 || isVideo(f.name); })[0];
          if(vidFile) handleVideoFile(listingId, vidFile);
        }
      });
    }
  }

  /* ── 전체 바인딩 (HTML 삽입 후 호출) ──────────────────── */
  function bindAll(listingId){
    injectStyles();
    bindPhotoEvents(listingId);
    bindVideoEvents(listingId);
    updatePhotoGrid(listingId);
    updateVideoUI(listingId);
  }

  /* ── 미디어 요약 (등록 제출 시 사용) ──────────────────── */
  function getSummary(listingId){
    var media = getMedia(listingId);
    return {
      photoCount: (media.photos||[]).length,
      hasVideo:   !!media.video,
      photos:     (media.photos||[]).map(function(p){ return { id:p.id, name:p.name, size:p.size }; }),
      video:      media.video ? { id:media.video.id, name:media.video.name, size:media.video.size } : null
    };
  }

  /* ── Public API ──────────────────────────────────────── */
  var MU = {
    renderPhotoPanel: renderPhotoPanel,
    renderVideoPanel: renderVideoPanel,
    bindAll:          bindAll,
    bindPhotoEvents:  bindPhotoEvents,
    bindVideoEvents:  bindVideoEvents,
    movePhoto:        movePhoto,
    removePhoto:      removePhoto,
    removeVideo:      removeVideo,
    getMedia:         getMedia,
    saveMedia:        saveMedia,
    clearMedia:       clearMedia,
    getSummary:       getSummary,
    injectStyles:     injectStyles,
    updatePhotoGrid:  updatePhotoGrid,
    updateVideoUI:    updateVideoUI,
    handlePhotoFiles: handlePhotoFiles,
    handleVideoFile:  handleVideoFile,
    MAX_PHOTOS:       MAX_PHOTOS
  };

  w.MediaUpload = MU;
})(window);
