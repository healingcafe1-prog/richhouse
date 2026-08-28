// listings.js — OK복덕방 매물 데이터
// 총 185개 (기존 33 + 신규 152)
// 자동 생성: 2026-08-19

var LISTINGS = [
  { id:'L001', addr:'청주시 흥덕구 오송읍 오송파크뷰 101동', region:'오송', type:'아파트', area:84, floor:12, rooms:3, baths:2, park:true, elev:true, confirmed:'2026-08-14', img:'https://sspark.genspark.ai/cfimages?u1=BU48o3php3AQw61StEnu%2B2p1EmeXpNSCWqYlGUz%2F7ce8k2rYPL6iayreqvBRee9UaFlW4SaYkCVvBjs20Tgo1Mak3K26kcWDYSqc3PWfCc%2BhFp1gRJrECJOVvSFCFmdaZxgQ5joAvCaofOEL1ztUk53C7WfWQhUz&u2=UlF%2BpE6qcfwsxif3&width=800',
    deals:{ sale:{price:48000, count:4, verified:true}, jeonse:{price:32000, count:3, verified:true}, wolse:{deposit:5000, rent:110, mgmt:12, count:7, verified:true}, direct:{dtype:'jeonse', price:31000, verified:true}, auction:null },
    realprice:[{d:'2025-11',p:45800},{d:'2026-02',p:46500},{d:'2026-05',p:47200},{d:'2026-07',p:47800}],
    agent:'청주오송공인중개사', agentType:'공인중개사', region2:'충북 청주시 흥덕구', lat:36.6186, lng:127.297 },
  { id:'L002', addr:'청주시 청원구 오창읍 테크노폴리스자이 203동', region:'오창', type:'아파트', area:74, floor:8, rooms:3, baths:2, park:true, elev:true, confirmed:'2026-08-10', img:'https://sspark.genspark.ai/cfimages?u1=4atuAPLrhbv3RPCIoXQTbc9ELS6B8LfchD5RgR53VdiwxV4ecTQPuyVsNgnBF30SkXlyXkGFS6F4%2Ba%2FhOH%2F0SJKMFPHlVdkqmjDTG0kJdSs4od3zfJMtAVa3eUnKzHxlo9hTQpVXHGBnpijHVoRPuWhqOuov991Qz7mXMDUtKRPZGzBK&u2=9nmyiTZQaed9Qt7Y&width=800',
    deals:{ sale:{price:36500, count:6, verified:true}, jeonse:{price:24000, count:5, verified:true}, wolse:{deposit:3000, rent:85, mgmt:9, count:4, verified:true}, direct:null, auction:{caseNo:'2026타경1042', court:'청주지방법원', appraised:35000, minBid:24500, failedCount:1, saleDate:'2026-09-18'} },
    realprice:[{d:'2025-11',p:35200},{d:'2026-02',p:35800},{d:'2026-05',p:36000},{d:'2026-07',p:36300}],
    agent:'오창중앙공인중개사', agentType:'공인중개사', region2:'충북 청주시 청원구', lat:36.7158, lng:127.4431 },
  { id:'L003', addr:'세종시 나성동 리버뷰써밋 1502동', region:'세종', type:'아파트', area:99, floor:15, rooms:4, baths:2, park:true, elev:true, confirmed:'2026-08-15', img:'https://sspark.genspark.ai/cfimages?u1=ca2tDRndpSC7fUbjbN509NqKcN4%2FoubUXjsLTkRMlVHPidMioHrbijczY0IqeHshY5bJG7jPTLuP43nSfO1CEQINgV1qF0bFRVCqPNwWw7jYfbBcupaCfSENtu6COgkL2PnVL7DJgQL7HDtt30iT1mVVSX1yKBZD9iUkFDX1zVGfUq%2FuItst%2BVGvFe8333oY7PdlrmgvuY43Zw%3D%3D&u2=VBbAfkS3A0FbRS1w&width=800',
    deals:{ sale:{price:68000, count:2, verified:true}, jeonse:{price:41000, count:2, verified:true}, wolse:null, direct:{dtype:'sale', price:66500, verified:true}, auction:null },
    realprice:[{d:'2025-11',p:65000},{d:'2026-02',p:66200},{d:'2026-05',p:67100},{d:'2026-07',p:67900}],
    agent:'세종나성공인중개사', agentType:'공인중개사', region2:'세종특별자치시', lat:36.5031, lng:127.2663 },
  { id:'L004', addr:'청주시 상당구 용암동 용암하이츠 305동', region:'청주 상당', type:'아파트', area:59, floor:5, rooms:2, baths:1, park:false, elev:true, confirmed:'2026-08-01', img:'https://sspark.genspark.ai/cfimages?u1=emghfT0sUny5rqDeP5wFeko6ZLS9UDPXPuYT8G229LpOJBSy7pCk7YzHpUpvTJkYcfV50qdRq844y7thRKx8uJ8dsn%2Fry%2BZJrEVTixOjRNEcIEeXAtkIj%2BIYQ7WkkKrik%2FhNizSSv2dW&u2=2DDxAYziDd9vkadH&width=800',
    deals:{ sale:{price:26500, count:3, verified:true}, jeonse:{price:18500, count:2, verified:false}, wolse:{deposit:2000, rent:65, mgmt:8, count:5, verified:true}, direct:null, auction:null },
    realprice:[{d:'2025-11',p:25400},{d:'2026-02',p:25900},{d:'2026-05',p:26100},{d:'2026-07',p:26300}],
    agent:'용암동공인중개사', agentType:'공인중개사', region2:'충북 청주시 상당구', lat:36.6439, lng:127.5018 },
  { id:'L005', addr:'청주시 흥덕구 봉명동 봉명자이 1동', region:'청주 흥덕', type:'오피스텔', area:42, floor:9, rooms:1, baths:1, park:true, elev:true, confirmed:'2026-08-12', img:'https://sspark.genspark.ai/cfimages?u1=NqplBcatxoVbaTtTfbc0jviLLAnZSI4O4coqKPuGv58B1CL33yvmx1X00RtxZstjdCJggVG6KkGAi4oGVzQ2GUHXGvk%2B&u2=qgqYe6Cav78Eu0uA&width=800',
    deals:{ sale:{price:16800, count:5, verified:true}, jeonse:null, wolse:{deposit:1000, rent:55, mgmt:7, count:9, verified:true}, direct:{dtype:'wolse', deposit:500, rent:52, verified:true}, auction:null },
    realprice:[{d:'2025-11',p:16200},{d:'2026-02',p:16400},{d:'2026-05',p:16600},{d:'2026-07',p:16750}],
    agent:'봉명동공인중개사', agentType:'공인중개사', region2:'충북 청주시 흥덕구', lat:36.6355, lng:127.4715 },
  { id:'L006', addr:'청주시 흥덕구 오송읍 오송자이르네 402동', region:'오송', type:'아파트', area:112, floor:20, rooms:4, baths:2, park:true, elev:true, confirmed:'2026-08-09', img:'https://sspark.genspark.ai/cfimages?u1=U5Ir%2BV8WJ078IYL4H4ZDaMkDzMH5Z5KIAUzfZO81Rn36TdEbs2ym5rc4H%2Fn%2FjhJyrWbUS6QbZdTCFg%2BOIkYP9vtNCvfuXX89cNqMnpLl7fNNtvLn9XXAe7%2FRg7rc0nM9zXo1qk9jiwXiO98dhKJxF5EuhHb2C6BiDz2s0tZK3Wo4XxLKQCA%3D&u2=IV%2FpLKkExg7Y5lz2&width=800',
    deals:{ sale:{price:59000, count:3, verified:true}, jeonse:{price:38500, count:1, verified:true}, wolse:null, direct:null, auction:{caseNo:'2026타경889', court:'청주지방법원', appraised:57000, minBid:39900, failedCount:2, saleDate:'2026-09-02'} },
    realprice:[{d:'2025-11',p:56200},{d:'2026-02',p:57500},{d:'2026-05',p:58200},{d:'2026-07',p:58800}],
    agent:'오송르네상스공인중개사', agentType:'공인중개사', region2:'충북 청주시 흥덕구', lat:36.6193, lng:127.2984 },
  { id:'L007', addr:'천안시 서북구 불당동 불당호반써밋 707동', region:'천안', type:'아파트', area:84, floor:11, rooms:3, baths:2, park:true, elev:true, confirmed:'2026-08-13', img:'https://sspark.genspark.ai/cfimages?u1=7PuIlbsAu9R91hq0PbdDkZp2AdEHW8OmV9g%2FUKeMcTDvB0b6CmZhFcBTp86ATDWaPOXf6kDhn7FbbvCS8VVHtqpUnKv3aTyta0DIjayVflHWG3aIXKDafvh%2BEvuOLDJxnxAOjGxaPJur1GzpQZoBsc2mqA8Eyf82B6WO0nvKMVLka0xQlOPwXd%2Fx5snUXLyabGDE0QE%3D&u2=zHXJaZ9rOWe5HJA5&width=800',
    deals:{ sale:{price:52000, count:8, verified:true}, jeonse:{price:34000, count:6, verified:true}, wolse:{deposit:4000, rent:100, mgmt:11, count:3, verified:true}, direct:null, auction:null },
    realprice:[{d:'2025-11',p:50100},{d:'2026-02',p:50900},{d:'2026-05',p:51500},{d:'2026-07',p:51900}],
    agent:'불당공인중개사', agentType:'공인중개사', region2:'충남 천안시 서북구', lat:36.8194, lng:127.1538 },
  { id:'L008', addr:'청주시 청원구 내수읍 내수그린빌 5동', region:'청주 청원', type:'빌라', area:64, floor:3, rooms:3, baths:1, park:true, elev:false, confirmed:'2026-07-28', img:'https://sspark.genspark.ai/cfimages?u1=4PAm1YC0g6ewmEw2hOvjXvbfoR%2BpK%2B33UQLhNdLjWgJ3nt%2BGv06dRYtxp4bqy2PPM%2FjgHF5K%2FMjxFlajE3qtAtHBADVzW36Cgu47gLbLOiUdWUHoPxWm&u2=ijB1VAJ0t5sz4uis&width=800',
    deals:{ sale:{price:15800, count:1, verified:false}, jeonse:{price:11000, count:2, verified:true}, wolse:{deposit:1500, rent:45, mgmt:5, count:3, verified:true}, direct:{dtype:'jeonse', price:10500, verified:true}, auction:null },
    realprice:[{d:'2025-11',p:15200},{d:'2026-02',p:15400},{d:'2026-05',p:15600},{d:'2026-07',p:15700}],
    agent:'내수읍공인중개사', agentType:'공인중개사', region2:'충북 청주시 청원구', lat:36.6907, lng:127.4823 },
  { id:'L009', addr:'청주시 흥덕구 오송읍 봉산리 오송역파라곤센트럴시티2차 3동', region:'오송', type:'아파트', area:84, floor:15, rooms:3, baths:2, park:true, elev:true, confirmed:'2026-08-16',
    img:'https://sspark.genspark.ai/cfimages?u1=YaSzt%2B%2B%2FiJ%2B502mjE5jh5dTqhVXGNyyW%2B6rj2hL2GApeQwGu8%2Bf28va8cRSXef3Vl0Yc851qMKcvwsntIkn5Tswj2Nts7cfKHVS13uLcqcS6Xt1uNvBgF52KoIM8x8Fo2v30uAyVW3gyLmj2dcXd1WAsJvxVqQVmEmIbt8yxbNTG&u2=D5DMsPUAc6pZGfl%2F&width=800',
    deals:{
      sale:{price:53000, count:3, verified:true},
      jeonse:{price:35000, count:2, verified:true},
      wolse:{deposit:5000, rent:120, mgmt:13, count:5, verified:true},
      direct:{dtype:'jeonse', price:34500, verified:true},
      auction:null
    },
    realprice:[{d:'2025-06',p:45000},{d:'2025-09',p:46500},{d:'2025-12',p:48000},{d:'2026-03',p:50000},{d:'2026-06',p:52500},{d:'2026-08',p:55000}],
    fairPrice:{low:50000, high:55000, label:'오송역파라곤2차 적정가'},
    agent:'오송역파라곤공인중개사', agentType:'공인중개사', region2:'충북 청주시 흥덕구', lat:36.6204, lng:127.2968 },
  { id:'L010', addr:'청주시 흥덕구 오송읍 봉산리 오송역파라곤센트럴시티2차 7동', region:'오송', type:'아파트', area:84, floor:8, rooms:3, baths:2, park:true, elev:true, confirmed:'2026-08-16',
    img:'https://sspark.genspark.ai/cfimages?u1=YaSzt%2B%2B%2FiJ%2B502mjE5jh5dTqhVXGNyyW%2B6rj2hL2GApeQwGu8%2Bf28va8cRSXef3Vl0Yc851qMKcvwsntIkn5Tswj2Nts7cfKHVS13uLcqcS6Xt1uNvBgF52KoIM8x8Fo2v30uAyVW3gyLmj2dcXd1WAsJvxVqQVmEmIbt8yxbNTG&u2=D5DMsPUAc6pZGfl%2F&width=800',
    deals:{
      sale:{price:50000, count:5, verified:true},
      jeonse:{price:33000, count:4, verified:true},
      wolse:{deposit:4000, rent:110, mgmt:12, count:6, verified:true},
      direct:{dtype:'jeonse', price:32500, verified:true},
      auction:null
    },
    realprice:[{d:'2025-06',p:45000},{d:'2025-09',p:46000},{d:'2025-12',p:47500},{d:'2026-03',p:49000},{d:'2026-06',p:51000},{d:'2026-08',p:52000}],
    fairPrice:{low:50000, high:55000, label:'오송역파라곤2차 적정가'},
    agent:'오송역파라곤공인중개사', agentType:'공인중개사', region2:'충북 청주시 흥덕구', lat:36.6202, lng:127.2972 },
  { id:'L011', addr:'청주시 흥덕구 오송읍 봉산리 오송역파라곤센트럴시티2차 11동', region:'오송', type:'아파트', area:59, floor:5, rooms:2, baths:1, park:true, elev:true, confirmed:'2026-08-16',
    img:'https://sspark.genspark.ai/cfimages?u1=YaSzt%2B%2B%2FiJ%2B502mjE5jh5dTqhVXGNyyW%2B6rj2hL2GApeQwGu8%2Bf28va8cRSXef3Vl0Yc851qMKcvwsntIkn5Tswj2Nts7cfKHVS13uLcqcS6Xt1uNvBgF52KoIM8x8Fo2v30uAyVW3gyLmj2dcXd1WAsJvxVqQVmEmIbt8yxbNTG&u2=D5DMsPUAc6pZGfl%2F&width=800',
    deals:{
      sale:{price:48000, count:4, verified:true},
      jeonse:{price:30000, count:3, verified:true},
      wolse:{deposit:3000, rent:95, mgmt:10, count:4, verified:true},
      direct:{dtype:'jeonse', price:29500, verified:true},
      auction:null
    },
    realprice:[{d:'2025-06',p:45000},{d:'2025-09',p:46000},{d:'2025-12',p:47000},{d:'2026-03',p:48500},{d:'2026-06',p:50000},{d:'2026-08',p:51500}],
    fairPrice:{low:50000, high:55000, label:'오송역파라곤2차 적정가'},
    agent:'오송역파라곤공인중개사', agentType:'공인중개사', region2:'충북 청주시 흥덕구', lat:36.6199, lng:127.2966 },

  /* ── 파라곤2차 1층 ── */
  { id:'L012', addr:'청주시 흥덕구 오송읍 봉산리 오송역파라곤센트럴시티2차 312동 1층', region:'오송', type:'아파트', area:145, floor:1, rooms:4, baths:2, park:true, elev:true, confirmed:'2026-08-16', pinned:true,
    img:'https://sspark.genspark.ai/cfimages?u1=YaSzt%2B%2B%2FiJ%2B502mjE5jh5dTqhVXGNyyW%2B6rj2hL2GApeQwGu8%2Bf28va8cRSXef3Vl0Yc851qMKcvwsntIkn5Tswj2Nts7cfKHVS13uLcqcS6Xt1uNvBgF52KoIM8x8Fo2v30uAyVW3gyLmj2dcXd1WAsJvxVqQVmEmIbt8yxbNTG&u2=D5DMsPUAc6pZGfl%2F&width=800',
    highlight:['4면 공원뷰','44평 광거실','오송역 5분','롯데시네마 인접','초·중학교 도보권','1층 단독 테라스'],
    locDetail:{
      school:'오송초등학교 도보 5분 · 오송중학교 도보 7분 — 안전한 통학로',
      culture:'롯데시네마 오송 차량 3분 · CGV 청주성안길 15분',
      transit:'오송역(KTX·SRT·청주공항 연결) 차량 5분 · 버스정류장 도보 2분',
      nature:'4면 공원 조망 — 봉산근린공원·오송생명과학단지 녹지',
      living:'이마트 오송점 차량 4분 · 롯데마트 오창점 10분 · 오송보건의료행정타운',
      space:'전용 145㎡(44평형) 초광폭 거실 — 개방감 극대화 4베이 구조'
    },
    deals:{
      sale:{price:47000, count:1, verified:true},
      jeonse:{price:31000, count:1, verified:true},
      wolse:{deposit:3000, rent:100, mgmt:13, count:2, verified:true},
      direct:{dtype:'sale', price:47000, verified:true},
      auction:null
    },
    realprice:[{d:'2025-06',p:45000},{d:'2025-09',p:46500},{d:'2025-12',p:48000},{d:'2026-03',p:50000},{d:'2026-06',p:52000},{d:'2026-08',p:55000}],
    fairPrice:{low:50000, high:55000, label:'오송역파라곤2차 적정가'},
    agent:'오송역파라곤공인중개사', agentType:'공인중개사', region2:'충북 청주시 흥덕구', lat:36.6197, lng:127.296 },

  /* ── 전국 확장 매물 ── */
  /* 서울 마포 공덕 — 공덕더샵 실거래 반영 */
  { id:'L013', addr:'서울시 마포구 공덕동 공덕더샵 802동', region:'서울', type:'아파트', area:84, floor:12, rooms:3, baths:2, park:true, elev:true, confirmed:'2026-08-15',
    img:'https://sspark.genspark.ai/cfimages?u1=J%2F3suPr8Hix%2FxQy4dxfjnGCH%2Fk6G1smheDpBVXffEP5eVYtYPeJK33D1zB2aiCvZAHp%2FjyU0febFay99UXychSnx%2F9w9Q0r9zDt2r1vTLP%2B68WoURuoBzdO1xKobNfbngV5kwYyqLHnRRBpOj7E4PCUkPBjqaTFUMGIPcnUl&u2=7anGS2AdFMp78mAS&width=800',
    deals:{ sale:{price:121000, count:6, verified:true}, jeonse:{price:68250, count:4, verified:true}, wolse:null, direct:null, auction:null },
    realprice:[{d:'2025-11',p:113000},{d:'2026-02',p:115500},{d:'2026-05',p:118000},{d:'2026-07',p:120000},{d:'2026-08',p:121000}],
    agent:'공덕역세권공인중개사', agentType:'공인중개사', region2:'서울특별시 마포구', lat:37.544, lng:126.9517 },

  /* 부산 해운대 동부올림픽타운 — 실거래 11억 신고가 반영 */
  { id:'L014', addr:'부산시 해운대구 우동 동부올림픽타운아파트 1002동', region:'부산', type:'아파트', area:84, floor:18, rooms:3, baths:2, park:true, elev:true, confirmed:'2026-08-14',
    img:'https://sspark.genspark.ai/cfimages?u1=MnTknrkyiCf8dv%2Bu1j478qu7iBXBRYhWkz4KIeJzIoA8tYq7t0QdXD7wgLYb2rwf1RDQPmTHrUWjq15WSlvChbykR7o%3D&u2=tpiB2MHCfUMULaVZ&width=800',
    deals:{ sale:{price:110000, count:5, verified:true}, jeonse:{price:40000, count:3, verified:true}, wolse:null, direct:{dtype:'jeonse', price:39500, verified:true}, auction:null },
    realprice:[{d:'2025-11',p:95000},{d:'2026-02',p:100000},{d:'2026-05',p:105000},{d:'2026-07',p:108500},{d:'2026-08',p:110000}],
    agent:'해운대공인중개사', agentType:'공인중개사', region2:'부산광역시 해운대구', lat:35.1621, lng:129.1584 },

  /* 대전 유성 호반써밋그랜드파크 — 실거래 7억 반영 */
  { id:'L015', addr:'대전시 유성구 용산동 호반써밋그랜드파크1BL 101동', region:'대전', type:'아파트', area:84, floor:12, rooms:3, baths:2, park:true, elev:true, confirmed:'2026-08-13',
    img:'https://sspark.genspark.ai/cfimages?u1=XKaRXbj7y0Og3CGbwAX1%2FzsY5rTqU9qTWkh7agteRbMyIR4R21dXGemi%2BD2yTKdMYoKL1T3CiX561iF7LOJ9rnESM3t94q4sHTq1qJuz21hbHdG7LhGFTgtVj5hyfuzqtwLgbVzWc35LRn3mGKDc8a53shzA7R7I7FWJdHjavWAmbye8IQmyzPI6p5DO7S%2F8ozb6EUxzVXXZpaHE2lVkvg%3D%3D&u2=sO8nCLcqay55h4VU&width=800',
    deals:{ sale:{price:75000, count:4, verified:true}, jeonse:{price:47000, count:3, verified:true}, wolse:{deposit:1000, rent:160, mgmt:12, count:2, verified:true}, direct:null, auction:null },
    realprice:[{d:'2025-11',p:66000},{d:'2026-02',p:68000},{d:'2026-05',p:71000},{d:'2026-07',p:73500},{d:'2026-08',p:75000}],
    agent:'유성구공인중개사', agentType:'공인중개사', region2:'대전광역시 유성구', lat:36.3716, lng:127.3012 },

  /* 단독주택 – 경기 양평 */
  { id:'L016', addr:'경기도 양평군 강상면 병산리 123 단독주택', region:'경기', type:'단독주택', area:168, floor:2, rooms:5, baths:3, park:true, elev:false, confirmed:'2026-08-12',
    img:'https://sspark.genspark.ai/cfimages?u1=4ZRHgNFJa8gFaRXjJaIzhO3k8jtwX2HMCjwaFWWt8tVjw85Elw4qXAXPa1gmmj%2BrTxm9q5xR57WnjlCxJUphdfq5DJ3rT%2BUcMm7vRGEMqkRJBSMYOpdDuTUrjDTcm3SjJkizLqtV7X58xg%3D%3D&u2=qG%2B5HlDHCxhHgExp&width=800',
    deals:{ sale:{price:68000, count:1, verified:true}, jeonse:{price:38000, count:1, verified:false}, wolse:null, direct:{dtype:'sale', price:65000, verified:true}, auction:null },
    realprice:[{d:'2025-09',p:62000},{d:'2025-12',p:64000},{d:'2026-03',p:65000},{d:'2026-07',p:67000}],
    agent:'양평강상공인중개사', agentType:'공인중개사', region2:'경기도 양평군', lat:37.4834, lng:127.5218 },

  /* 전원주택 – 충북 진천 */
  { id:'L017', addr:'충청북도 진천군 이월면 사곡리 88 전원주택', region:'충북', type:'전원주택', area:132, floor:1, rooms:4, baths:2, park:true, elev:false, confirmed:'2026-08-11',
    img:'https://sspark.genspark.ai/cfimages?u1=8lxzHM3NomynOPhBCMZCP%2FucJofL7a4O%2Fcg%2Bh0h6obkm2QpeRmAx5EHpmkkcn%2BGho9Qg9CWY%2BF%2FnrV0JyhI025aCiuUAcDNWppAa2PXDhytwoA%3D%3D&u2=i5BaQKYQgOX3BDPJ&width=800',
    deals:{ sale:{price:32000, count:2, verified:true}, jeonse:null, wolse:{deposit:2000, rent:80, mgmt:0, count:1, verified:true}, direct:{dtype:'sale', price:31000, verified:true}, auction:null },
    realprice:[{d:'2025-09',p:28000},{d:'2025-12',p:29500},{d:'2026-03',p:30500},{d:'2026-07',p:31500}],
    agent:'진천이월공인중개사', agentType:'공인중개사', region2:'충청북도 진천군', lat:36.8621, lng:127.4393 },

  /* 토지 – 충남 아산 */
  { id:'L018', addr:'충청남도 아산시 탕정면 매곡리 산 56-2 (대지 685㎡)', region:'충남', type:'토지', area:685, floor:0, rooms:0, baths:0, park:false, elev:false, confirmed:'2026-08-10',
    img:'https://sspark.genspark.ai/cfimages?u1=bZmtGbwyYtIEzDyOd%2FtlBflySjCNiOqe3%2FkDVxiJlAK1soByvGRpkz4Qns47UDdc07bK79ZZZfUC2tgysumoopXVCNljuAHG%2B4HOUQsfrFP1m0X5QODnEhbY3lc%3D&u2=uNdmQ88QSiWNQwlo&width=800',
    deals:{ sale:{price:24500, count:1, verified:true}, jeonse:null, wolse:null, direct:{dtype:'sale', price:23500, verified:true}, auction:null },
    realprice:[{d:'2025-06',p:20000},{d:'2025-12',p:21500},{d:'2026-04',p:23000},{d:'2026-07',p:24000}],
    agent:'탕정지역공인중개사', agentType:'공인중개사', region2:'충청남도 아산시', lat:36.7763, lng:127.0205 },

  /* 임야 – 강원 홍천 */
  { id:'L019', addr:'강원도 홍천군 서면 마곡리 산 124 (임야 9,900㎡)', region:'강원', type:'임야', area:9900, floor:0, rooms:0, baths:0, park:false, elev:false, confirmed:'2026-08-09',
    img:'https://sspark.genspark.ai/cfimages?u1=zIBf2Qy%2FywRFSTeWVtYpPvbo%2FlsUHi399IMom4AJnfatTyW46Tt4kopg9GH8xoZeqPsy1FrIp1ez4zg6bF4znTHol4yynPGjq%2FZUsYX3sUEJlbZYog%3D%3D&u2=kgzsMUY1yWQ%2Blq43&width=800',
    deals:{ sale:{price:8500, count:1, verified:false}, jeonse:null, wolse:null, direct:{dtype:'sale', price:8000, verified:true}, auction:null },
    realprice:[{d:'2025-06',p:7500},{d:'2026-01',p:7800},{d:'2026-07',p:8200}],
    agent:'홍천서면공인중개사', agentType:'공인중개사', region2:'강원도 홍천군', lat:37.6862, lng:127.9204 },

  /* 농지(전) – 전북 김제 */
  { id:'L020', addr:'전라북도 김제시 백구면 유강리 1045 (전 1,320㎡)', region:'전북', type:'전', area:1320, floor:0, rooms:0, baths:0, park:false, elev:false, confirmed:'2026-08-08',
    img:'https://sspark.genspark.ai/cfimages?u1=eEX8exRIH%2F3CnsuMGboVP0NBR1D225B6K%2BVKwnkWDKrLIBtyuo%2B8y2iUa6GUe3kpzF%2FsL9m0ETwy5uZZo%2BjftJ4mA4X4BR4liRXD6fvuKHxs1kiJa%2Btr1wMYaUih%2Fi91jNWM2bdF9A%3D%3D&u2=A9yfJeYUuK9CaIR5&width=800',
    deals:{ sale:{price:4200, count:1, verified:true}, jeonse:null, wolse:null, direct:null, auction:null },
    realprice:[{d:'2025-06',p:3800},{d:'2026-01',p:4000},{d:'2026-07',p:4100}],
    agent:'김제백구공인중개사', agentType:'공인중개사', region2:'전라북도 김제시', lat:35.8085, lng:126.8836 },

  /* 농지(답) – 충남 논산 */
  { id:'L021', addr:'충청남도 논산시 연무읍 동산리 822 (답 2,640㎡)', region:'충남', type:'답', area:2640, floor:0, rooms:0, baths:0, park:false, elev:false, confirmed:'2026-08-07',
    img:'https://sspark.genspark.ai/cfimages?u1=AgCI7eWUsyalNQ9bpZVoJWZy5sdlWYtM1oevmh30LcNgDhimT6fDH1NpusJKA%2FMafm5qvfwFeHf6cq1%2FJXT82Rcr0nBjtVhDCdCGoDe%2BnrMDIh0UKQ%3D%3D&u2=Uiy4QGFgUxhiJ0TR&width=800',
    deals:{ sale:{price:5800, count:1, verified:true}, jeonse:null, wolse:null, direct:{dtype:'sale', price:5500, verified:true}, auction:null },
    realprice:[{d:'2025-06',p:5000},{d:'2026-01',p:5300},{d:'2026-07',p:5600}],
    agent:'논산연무공인중개사', agentType:'공인중개사', region2:'충청남도 논산시', lat:36.1795, lng:127.0992 },

  /* 파라곤2차 312동 1층 */
  { id:'L022', addr:'청주시 흥덕구 오송읍 봉산리 오송역파라곤센트럴시티2차 312동 1층', region:'오송', type:'아파트', area:84, floor:1, rooms:3, baths:2, park:true, elev:true, confirmed:'2026-08-16', pinned:true,
    img:'https://sspark.genspark.ai/cfimages?u1=YaSzt%2B%2B%2FiJ%2B502mjE5jh5dTqhVXGNyyW%2B6rj2hL2GApeQwGu8%2Bf28va8cRSXef3Vl0Yc851qMKcvwsntIkn5Tswj2Nts7cfKHVS13uLcqcS6Xt1uNvBgF52KoIM8x8Fo2v30uAyVW3gyLmj2dcXd1WAsJvxVqQVmEmIbt8yxbNTG&u2=D5DMsPUAc6pZGfl%2F&width=800',
    highlight:['1층 단독호','4면 공원뷰','오송역 5분','롯데시네마 인접','초·중학교 도보권','테라스 활용 가능'],
    locDetail:{
      school:'오송초등학교 도보 5분 · 오송중학교 도보 7분 — 안전한 통학로',
      culture:'롯데시네마 오송 차량 3분 · 이마트 오송점 차량 4분',
      transit:'오송역(KTX·SRT·청주공항 연결) 차량 5분 · 버스정류장 도보 2분',
      nature:'4면 공원 조망 — 봉산근린공원·오송생명과학단지 녹지',
      living:'이마트 오송점 차량 4분 · 롯데마트 오창점 10분 · 오송보건의료행정타운',
      space:'전용 84㎡ 3베드 · 1층 단독호 — 테라스 공간 활용, 외부 직접 출입 가능'
    },
    deals:{
      sale:{price:47000, count:1, verified:true},
      jeonse:null,
      wolse:null,
      direct:{dtype:'sale', price:47000, verified:true},
      auction:null
    },
    realprice:[{d:'2025-06',p:45000},{d:'2025-09',p:46000},{d:'2025-12',p:47500},{d:'2026-03',p:49000},{d:'2026-06',p:51000},{d:'2026-08',p:53000}],
    fairPrice:{low:50000, high:55000, label:'오송역파라곤2차 적정가'},
    agent:'오송역파라곤공인중개사', agentType:'공인중개사', region2:'충북 청주시 흥덕구', lat:36.6197, lng:127.2963 },

  /* ── 전국 실매물 크롤링 추가 (2026.08.16 기준) ── */

  /* 세종 새롬동 — 실거래 6억7천500 반영 */
  { id:'L023', addr:'세종특별자치시 새롬동 새뜸마을 힐스테이트 601동', region:'세종', type:'아파트', area:59, floor:6, rooms:2, baths:1, park:true, elev:true, confirmed:'2026-08-16',
    img:'https://sspark.genspark.ai/cfimages?u1=C6mDX8IkKjb82yoGg6iKZ08Co2ZZhqqjD3h0r1a8ycssJuKFJRv5v5S1Jh2074QcZNaubyoe1M2S4eOhid%2Ff%2BRXN8QZOAgqVYqg9VQ%3D%3D&u2=pNNQV%2BLhgaxi3HLC&width=800',
    deals:{ sale:{price:67500, count:5, verified:true}, jeonse:{price:30000, count:4, verified:true}, wolse:null, direct:{dtype:'sale', price:66000, verified:true}, auction:null },
    realprice:[{d:'2025-11',p:60000},{d:'2026-02',p:62000},{d:'2026-05',p:65000},{d:'2026-07',p:67000},{d:'2026-08',p:67500}],
    agent:'세종새롬공인중개사', agentType:'공인중개사', region2:'세종특별자치시', lat:36.5114, lng:127.2432 },

  /* 세종 다정동 — 실거래 7억1천 반영 */
  { id:'L024', addr:'세종특별자치시 다정동 가온마을3단지 202동', region:'세종', type:'아파트', area:99, floor:10, rooms:4, baths:2, park:true, elev:true, confirmed:'2026-08-15',
    img:'https://sspark.genspark.ai/cfimages?u1=ObfPDBw6A%2FYkJyy8uA%2BSRsol4Lvvgq74qhBGEUX3aCtPMjh6WhmGIUpPOQjyl7hz9x5G4BXzZGbJobA5I4vQ25U9LW4UqMSUagTQIYasmXD9NHy4LEtYnn0%2BxcVNg3WoCLNHXbazrFw0zsnvhbUrL03amsR1%2Blj9YBv0chZLrRr0&u2=%2FAzuJUB8DyTiyMYX&width=800',
    deals:{ sale:{price:71000, count:7, verified:true}, jeonse:{price:27300, count:5, verified:true}, wolse:null, direct:null, auction:null },
    realprice:[{d:'2025-11',p:62000},{d:'2026-02',p:65000},{d:'2026-05',p:68000},{d:'2026-07',p:70000},{d:'2026-08',p:71000}],
    agent:'세종다정공인중개사', agentType:'공인중개사', region2:'세종특별자치시', lat:36.4881, lng:127.2541 },

  /* 세종 한솔동 — 실거래 4억9천500 반영 */
  { id:'L025', addr:'세종특별자치시 한솔동 첫마을1단지 308동', region:'세종', type:'아파트', area:84, floor:7, rooms:3, baths:2, park:true, elev:true, confirmed:'2026-08-15',
    img:'https://sspark.genspark.ai/cfimages?u1=9K5KL2Cha%2F35Mb0yjY4m7ZWKmliMSLnbRBmJRf%2FpbRFWx6kY5MK62eomBiHsxP7ftWujv6EETqaeFEqSpUW5fbbwxFPqmhiWGwzeBEfV2Q%3D%3D&u2=lI1dB3VyYD5Wwk6y&width=800',
    deals:{ sale:{price:49500, count:6, verified:true}, jeonse:{price:24000, count:5, verified:true}, wolse:{deposit:2000, rent:80, mgmt:9, count:3, verified:true}, direct:null, auction:null },
    realprice:[{d:'2025-11',p:44000},{d:'2026-02',p:46000},{d:'2026-05',p:47500},{d:'2026-07',p:49000},{d:'2026-08',p:49500}],
    agent:'세종한솔공인중개사', agentType:'공인중개사', region2:'세종특별자치시', lat:36.5248, lng:127.2689 },

  /* 경기 수원 광교 — 실거래 14억8천500 신고가 반영 */
  { id:'L026', addr:'경기도 수원시 영통구 원천동 광교더샵 801동', region:'경기', type:'아파트', area:84, floor:15, rooms:3, baths:2, park:true, elev:true, confirmed:'2026-08-15',
    img:'https://sspark.genspark.ai/cfimages?u1=4ZRHgNFJa8gFaRXjJaIzhO3k8jtwX2HMCjwaFWWt8tVjw85Elw4qXAXPa1gmmj%2BrTxm9q5xR57WnjlCxJUphdfq5DJ3rT%2BUcMm7vRGEMqkRJBSMYOpdDuTUrjDTcm3SjJkizLqtV7X58xg%3D%3D&u2=qG%2B5HlDHCxhHgExp&width=800',
    deals:{ sale:{price:148500, count:4, verified:true}, jeonse:{price:85000, count:2, verified:true}, wolse:null, direct:null, auction:null },
    realprice:[{d:'2025-11',p:135000},{d:'2026-02',p:138000},{d:'2026-05',p:143000},{d:'2026-07',p:147000},{d:'2026-08',p:148500}],
    agent:'광교신도시공인중개사', agentType:'공인중개사', region2:'경기도 수원시 영통구', lat:37.2877, lng:127.0434 },

  /* 인천 송도 — 실거래 SK뷰 84평형 8억7천700 반영 */
  { id:'L027', addr:'인천시 연수구 송도동 인천송도SK뷰 504동', region:'인천', type:'아파트', area:84, floor:14, rooms:3, baths:2, park:true, elev:true, confirmed:'2026-08-14',
    img:'https://sspark.genspark.ai/cfimages?u1=GUzOSd8iyIsPXoCPw7G%2Fd6u1Mg0krpfjFxiCjmqU%2B0HpBHJ5kEiiGRnQNzrQjBId4fB3wZOmKwRAwW%2FaTWGDEAJi%2FNqueLJiF4LOKVPmz0tVIvwu8FJZpF7IXdUbfmzSwEnGsiz6fIT1M4%2BajGFXkRLvUp6ggo8%3D&u2=rV3E9NlPa%2B%2B0giiJ&width=800',
    deals:{ sale:{price:87700, count:5, verified:true}, jeonse:{price:63600, count:4, verified:true}, wolse:null, direct:null, auction:null },
    realprice:[{d:'2025-11',p:82000},{d:'2026-02',p:84000},{d:'2026-05',p:85500},{d:'2026-07',p:87000},{d:'2026-08',p:87700}],
    agent:'송도국제도시공인중개사', agentType:'공인중개사', region2:'인천광역시 연수구', lat:37.3931, lng:126.6529 },

  /* 대구 수성구 범어동 — 실거래 범어삼성쉐르빌 10억2천 반영 */
  { id:'L028', addr:'대구시 수성구 범어동 범어삼성쉐르빌 701동', region:'대구', type:'아파트', area:84, floor:12, rooms:3, baths:2, park:true, elev:true, confirmed:'2026-08-14',
    img:'https://sspark.genspark.ai/cfimages?u1=YKtEkI0xsx3%2BF1gSkfXeTAQ0fChtJEyCrVRssJkZmAR%2BcyM4y9IPCvxxJIQgppzYu5eDohvCcujU5oxtbVruzm0EgAHyfREXk%2BD2qn4CXaQsTJlbv5LQTwfDZE5mUWPtTVIWyoNM1aZCKHeETWXGimNLWVEx2pHZg1qgiLvoHS08&u2=IA2JVC%2FgzSoZxtXj&width=800',
    deals:{ sale:{price:102000, count:3, verified:true}, jeonse:{price:52000, count:2, verified:true}, wolse:null, direct:null, auction:null },
    realprice:[{d:'2025-11',p:92000},{d:'2026-02',p:95000},{d:'2026-05',p:98000},{d:'2026-07',p:100000},{d:'2026-08',p:102000}],
    agent:'수성범어공인중개사', agentType:'공인중개사', region2:'대구광역시 수성구', lat:35.8616, lng:128.6317 },

  /* 대전 유성 죽동 — 실거래 죽동대원칸타빌 매매 6억 반영 */
  { id:'L029', addr:'대전시 유성구 죽동 죽동대원칸타빌 204동', region:'대전', type:'아파트', area:74, floor:12, rooms:3, baths:2, park:true, elev:true, confirmed:'2026-08-13',
    img:'https://sspark.genspark.ai/cfimages?u1=yxTgpkzhc8GDdksHPynNurheexbVBSeI%2FUjfGZj9nKF3JrQIOEiB96M5TVQPODQFxMp4p7evjLyXigg0kIM6grjMvtaSt4a192GkMFWZg9nah7JV%2BRrNNPj6NPNvWQm29wEmRltVg3Y0CbZgsuBBHgL%2FG3etxMUzrvCIL4KOsUjUKyZPZ%2BS8w62CDv63RJ9AeUD5i9DrkuQU6KjOhuHmng%3D%3D&u2=lOaiA3ujPEQSlB51&width=800',
    deals:{ sale:{price:60000, count:4, verified:true}, jeonse:{price:45000, count:3, verified:true}, wolse:null, direct:{dtype:'jeonse', price:44500, verified:true}, auction:null },
    realprice:[{d:'2025-11',p:53000},{d:'2026-02',p:55000},{d:'2026-05',p:57500},{d:'2026-07',p:59000},{d:'2026-08',p:60000}],
    agent:'유성죽동공인중개사', agentType:'공인중개사', region2:'대전광역시 유성구', lat:36.3581, lng:127.3291 },

  /* 부산 해운대 센텀 — 실거래 센텀센시빌 5억8천300 반영 */
  { id:'L030', addr:'부산시 해운대구 우동 센텀센시빌아파트 502동', region:'부산', type:'아파트', area:84, floor:14, rooms:3, baths:2, park:true, elev:true, confirmed:'2026-08-14',
    img:'https://sspark.genspark.ai/cfimages?u1=QlKwQw93kpSnDbiQNffBwnDoYk23E3%2BTE7BfLS%2B2Kd2sOXgQAQXFrFgPX0WEHvyko5phSb6dex7lgKAJ2LUPEdsMtrdvemqCY43lwq%2F2WJpLTuJf3yj9oNxDleXunoMeT5fXW%2FKm4yVpd3BC1KZwJ%2BvVoaws3yGV4g%3D%3D&u2=hapjFiMKPaNQDBW2&width=800',
    deals:{ sale:{price:58300, count:4, verified:true}, jeonse:{price:28800, count:3, verified:true}, wolse:null, direct:null, auction:null },
    realprice:[{d:'2025-11',p:52000},{d:'2026-02',p:54000},{d:'2026-05',p:56000},{d:'2026-07',p:57500},{d:'2026-08',p:58300}],
    agent:'해운대센텀공인중개사', agentType:'공인중개사', region2:'부산광역시 해운대구', lat:35.1722, lng:129.1315 },

  /* 서울 마포 공덕 래미안5차 — 실매물 급매 반영 */
  { id:'L031', addr:'서울시 마포구 공덕동 래미안공덕5차 305동', region:'서울', type:'아파트', area:59, floor:8, rooms:2, baths:1, park:true, elev:true, confirmed:'2026-08-15',
    img:'https://sspark.genspark.ai/cfimages?u1=YNxJpVpLO45ucZ%2FBI5P3xzYkrSF5RpAyG8cPCk%2BvnZ77gtEXki17QTSSLdbsHJf6VVMuP87XkAMsHQAfN54%2BsDA91ThaWaNQePDxx2%2FFg2w5VFVOs3JTDTfAJRzcIB%2FK2BFhYIHVC3384h3YoR2ohl%2FnnAoVGmU3JoI%2FGOmao9wq&u2=nrT3qQJKnpNU0bkT&width=800',
    deals:{ sale:{price:93000, count:3, verified:true}, jeonse:{price:55000, count:2, verified:true}, wolse:null, direct:null, auction:null },
    realprice:[{d:'2025-11',p:87000},{d:'2026-02',p:89000},{d:'2026-05',p:91000},{d:'2026-07',p:92000},{d:'2026-08',p:93000}],
    agent:'공덕공인중개사', agentType:'공인중개사', region2:'서울특별시 마포구', lat:37.5445, lng:126.9525 },

  /* 세종 도담동 — 실거래 4억3천 반영 */
  { id:'L032', addr:'세종특별자치시 도담동 도램마을9단지 202동', region:'세종', type:'아파트', area:59, floor:15, rooms:2, baths:1, park:true, elev:true, confirmed:'2026-08-14',
    img:'https://sspark.genspark.ai/cfimages?u1=9ARMdtKxP0h%2Bwumi0M4NL6ofJRQtPqAeMQz9Ac8VOlgNQfNhlMJtvUmFvYfJPpmZS%2Bz45xxJQ2MEtOB6tno72N4FeBXkzU0rU4rEcZT7N1U%3D&u2=JGyxam5PQv2KigMA&width=800',
    deals:{ sale:{price:43000, count:5, verified:true}, jeonse:{price:26000, count:4, verified:true}, wolse:{deposit:2000, rent:75, mgmt:9, count:3, verified:true}, direct:null, auction:null },
    realprice:[{d:'2025-11',p:39000},{d:'2026-02',p:40500},{d:'2026-05',p:41500},{d:'2026-07',p:42500},{d:'2026-08',p:43000}],
    agent:'세종도담공인중개사', agentType:'공인중개사', region2:'세종특별자치시', lat:36.5142, lng:127.2358 },

  /* 청주 상당구 중앙로 상가 1층 — 소나무길 인근 75평 실매물 */
  { id:'L033', addr:'청주시 상당구 중앙로 43 상가 1층', region:'청주 상당',
    type:'상가임대', area:248, commPy:75, floor:1,
    bizType:'다업종 가능 (업종제한 없음)', park:true, elev:true, confirmed:'2026-08-16',
    img:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    highlight:['청주시청 후문 도보 2분','소나무길 입구 상권','고급 인테리어·집기 풀옵션','전 메뉴 레시피 일체 제공','1개월 경영지원 포함','기존 단골고객 DB 포함','권리금 3천만원 특별 할인'],
    locDetail:{
      location:'청주시청 후문 도보 2분 · 소나무길 입구 · 중앙로 메인상권',
      commercial:'중앙로 핵심 상권 — 관공서·사무실 밀집 지역 점심·저녁 직장인 유동인구 풍부. 인근 식당·카페 활성 상권으로 안정적 고객층 확보 가능.',
      transit:'청주시내버스 중앙로 정류장 도보 1분 · 시내 주요 노선 정차 · 청주역 차량 15분',
      traffic:'평일 점심·저녁 유동인구 집중 · 관공서 밀집지역 특성상 점심 수요 안정 · 소나무길 주말 나들이객 유입',
      nearby:'청주시청·법원·경찰서·공공기관 밀집 · 우체국·은행 다수 · 소나무길 카페거리 인접',
      parking:'건물 내 주차 가능 (방문객 편의)'
    },
    commInfo:{
      '건물용도':'근린생활시설',
      '전용면적':'248㎡ (75평)',
      '층':'지상 1층',
      '입주가능':'즉시 입주',
      '업종제한':'없음 (다업종 가능)',
      '관리비':'없음 (부가세 월세에 포함)',
      '권리금 구성':'인테리어·집기·레시피·경영지원 일체'
    },
    deals:{
      sale:null,
      jeonse:null,
      wolse:{ deposit:1200, rent:115.5, mgmt:0, count:1, verified:true },
      premium:{
        price:10000,
        discounted:7000,
        interiorDesc:'깔끔하고 고급스런 인테리어·집기 일체 포함 (시공비 1억 이상, 현재 완벽한 상태 유지)',
        recipe:'음식점·카페 즉시 적용 가능한 전 메뉴 레시피 제공 (음료·푸드 전 품목)',
        support:'1개월 경영지원 — 운영 노하우·거래처·원가율 전수',
        customers:'기존 단골 고객 DB 및 SNS 채널 인계 포함',
        includes:'인테리어·집기·레시피·경영지원·고객DB 일체',
        reason:'사정으로 인한 빠른 양도 희망 — 원가 1억 대비 3천만원 특별 할인 양도'
      },
      direct:{ dtype:'wolse', deposit:1200, rent:115.5, verified:true },
      auction:null
    },
    realprice:[{d:'2024-01',p:80000},{d:'2025-01',p:90000},{d:'2026-01',p:100000},{d:'2026-08',p:100000}],
    agent:'청주중앙로공인중개사', agentType:'공인중개사', region2:'충북 청주시 상당구', lat:36.6378, lng:127.4913 },
{
  "id": "L034",
  "addr": "서울시 강남구 대치동 대치은마아파트 101동",
  "region": "서울",
  "type": "아파트",
  "area": 84,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=75",
  "deals": {
    "sale": {
      "price": 195000,
      "count": 5,
      "verified": true
    },
    "jeonse": {
      "price": 120000,
      "count": 2,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 192209,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 179004
    },
    {
      "d": "2026-02",
      "p": 180900
    },
    {
      "d": "2026-05",
      "p": 183500
    },
    {
      "d": "2026-07",
      "p": 187189
    },
    {
      "d": "2026-08",
      "p": 195000
    }
  ],
  "agent": "대치동공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 강남구",
  "lat": 37.5024,
  "lng": 127.0604
},
{
  "id": "L035",
  "addr": "서울시 서초구 반포동 래미안퍼스티지 201동",
  "region": "서울",
  "type": "아파트",
  "area": 112,
  "floor": 15,
  "rooms": 4,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 380000,
      "count": 4,
      "verified": true
    },
    "jeonse": {
      "price": 180000,
      "count": 3,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "jeonse",
      "price": 176026,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 339717
    },
    {
      "d": "2026-02",
      "p": 349617
    },
    {
      "d": "2026-05",
      "p": 355466
    },
    {
      "d": "2026-07",
      "p": 359680
    },
    {
      "d": "2026-08",
      "p": 380000
    }
  ],
  "agent": "반포래미안공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 서초구",
  "lat": 37.5042,
  "lng": 126.9979
},
{
  "id": "L036",
  "addr": "서울시 송파구 잠실동 잠실엘스 302동",
  "region": "서울",
  "type": "아파트",
  "area": 84,
  "floor": 12,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 215000,
      "count": 1,
      "verified": true
    },
    "jeonse": {
      "price": 130000,
      "count": 5,
      "verified": false
    },
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 204927,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 201364
    },
    {
      "d": "2026-02",
      "p": 206943
    },
    {
      "d": "2026-05",
      "p": 210509
    },
    {
      "d": "2026-07",
      "p": 213423
    },
    {
      "d": "2026-08",
      "p": 215000
    }
  ],
  "agent": "잠실엘스공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 송파구",
  "lat": 37.5073,
  "lng": 127.0922
},
{
  "id": "L037",
  "addr": "서울시 강동구 둔촌동 올림픽파크포레온 1102동",
  "region": "서울",
  "type": "아파트",
  "area": 59,
  "floor": 7,
  "rooms": 2,
  "baths": 1,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 133000,
      "count": 4,
      "verified": true
    },
    "jeonse": {
      "price": 80000,
      "count": 4,
      "verified": true
    },
    "wolse": {
      "deposit": 5000,
      "rent": 260,
      "mgmt": 15,
      "count": 6,
      "verified": false
    },
    "direct": {
      "dtype": "jeonse",
      "price": 78245,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 117894
    },
    {
      "d": "2026-02",
      "p": 120570
    },
    {
      "d": "2026-05",
      "p": 123063
    },
    {
      "d": "2026-07",
      "p": 124896
    },
    {
      "d": "2026-08",
      "p": 133000
    }
  ],
  "agent": "둔촌올파포공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 강동구",
  "lat": 37.5392,
  "lng": 127.1388
},
{
  "id": "L038",
  "addr": "서울시 노원구 상계동 상계주공13단지 201동",
  "region": "서울",
  "type": "아파트",
  "area": 49,
  "floor": 5,
  "rooms": 2,
  "baths": 1,
  "park": false,
  "elev": true,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 51000,
      "count": 6,
      "verified": true
    },
    "jeonse": {
      "price": 35000,
      "count": 1,
      "verified": false
    },
    "wolse": {
      "deposit": 3000,
      "rent": 100,
      "mgmt": 5,
      "count": 6,
      "verified": true
    },
    "direct": {
      "dtype": "jeonse",
      "price": 34044,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 45855
    },
    {
      "d": "2026-02",
      "p": 46771
    },
    {
      "d": "2026-05",
      "p": 48066
    },
    {
      "d": "2026-07",
      "p": 49164
    },
    {
      "d": "2026-08",
      "p": 51000
    }
  ],
  "agent": "노원공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 노원구",
  "lat": 37.6561,
  "lng": 127.0673
},
{
  "id": "L039",
  "addr": "서울시 은평구 수색동 DMC파크뷰자이 401동",
  "region": "서울",
  "type": "아파트",
  "area": 84,
  "floor": 10,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-13",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 98000,
      "count": 7,
      "verified": true
    },
    "jeonse": {
      "price": 62000,
      "count": 4,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 93642,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 92905
    },
    {
      "d": "2026-02",
      "p": 95434
    },
    {
      "d": "2026-05",
      "p": 96680
    },
    {
      "d": "2026-07",
      "p": 97956
    },
    {
      "d": "2026-08",
      "p": 98000
    }
  ],
  "agent": "은평DMC공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 은평구",
  "lat": 37.5792,
  "lng": 126.8989
},
{
  "id": "L040",
  "addr": "서울시 용산구 이촌동 한가람아파트 204동",
  "region": "서울",
  "type": "아파트",
  "area": 84,
  "floor": 6,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-12",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 185000,
      "count": 8,
      "verified": true
    },
    "jeonse": {
      "price": 105000,
      "count": 5,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "jeonse",
      "price": 102613,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 167242
    },
    {
      "d": "2026-02",
      "p": 171058
    },
    {
      "d": "2026-05",
      "p": 173150
    },
    {
      "d": "2026-07",
      "p": 176387
    },
    {
      "d": "2026-08",
      "p": 185000
    }
  ],
  "agent": "이촌한가람공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 용산구",
  "lat": 37.5191,
  "lng": 126.9713
},
{
  "id": "L041",
  "addr": "서울시 마포구 아현동 마포래미안푸르지오 503동",
  "region": "서울",
  "type": "아파트",
  "area": 59,
  "floor": 9,
  "rooms": 2,
  "baths": 1,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-11",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 91000,
      "count": 2,
      "verified": true
    },
    "jeonse": {
      "price": 57000,
      "count": 3,
      "verified": true
    },
    "wolse": {
      "deposit": 3000,
      "rent": 160,
      "mgmt": 13,
      "count": 4,
      "verified": false
    },
    "direct": {
      "dtype": "sale",
      "price": 88413,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 84423
    },
    {
      "d": "2026-02",
      "p": 85268
    },
    {
      "d": "2026-05",
      "p": 86673
    },
    {
      "d": "2026-07",
      "p": 87573
    },
    {
      "d": "2026-08",
      "p": 91000
    }
  ],
  "agent": "마포래미안공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 마포구",
  "lat": 37.5531,
  "lng": 126.9519
},
{
  "id": "L042",
  "addr": "서울시 성동구 성수동 서울숲푸르지오 702동",
  "region": "서울",
  "type": "아파트",
  "area": 74,
  "floor": 14,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-10",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 142000,
      "count": 1,
      "verified": true
    },
    "jeonse": {
      "price": 82000,
      "count": 5,
      "verified": true
    },
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 134680
    },
    {
      "d": "2026-02",
      "p": 138089
    },
    {
      "d": "2026-05",
      "p": 139824
    },
    {
      "d": "2026-07",
      "p": 142551
    },
    {
      "d": "2026-08",
      "p": 142000
    }
  ],
  "agent": "성수동공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 성동구",
  "lat": 37.5467,
  "lng": 127.0437
},
{
  "id": "L043",
  "addr": "서울시 광진구 자양동 더샵스타시티 1603동",
  "region": "서울",
  "type": "아파트",
  "area": 84,
  "floor": 16,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-09",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 132000,
      "count": 4,
      "verified": true
    },
    "jeonse": {
      "price": 76000,
      "count": 6,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 127506,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 120596
    },
    {
      "d": "2026-02",
      "p": 123971
    },
    {
      "d": "2026-05",
      "p": 126330
    },
    {
      "d": "2026-07",
      "p": 128219
    },
    {
      "d": "2026-08",
      "p": 132000
    }
  ],
  "agent": "광진자양공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 광진구",
  "lat": 37.5373,
  "lng": 127.079
},
{
  "id": "L044",
  "addr": "서울시 강서구 마곡동 마곡엠밸리 7단지",
  "region": "서울",
  "type": "아파트",
  "area": 74,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-08",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 88000,
      "count": 4,
      "verified": false
    },
    "jeonse": {
      "price": 55000,
      "count": 6,
      "verified": true
    },
    "wolse": {
      "deposit": 3000,
      "rent": 150,
      "mgmt": 8,
      "count": 2,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 83849,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 82738
    },
    {
      "d": "2026-02",
      "p": 83919
    },
    {
      "d": "2026-05",
      "p": 84980
    },
    {
      "d": "2026-07",
      "p": 87419
    },
    {
      "d": "2026-08",
      "p": 88000
    }
  ],
  "agent": "마곡공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 강서구",
  "lat": 37.5589,
  "lng": 126.8309
},
{
  "id": "L045",
  "addr": "서울시 동작구 사당동 이수브라운스톤 102동",
  "region": "서울",
  "type": "아파트",
  "area": 59,
  "floor": 5,
  "rooms": 2,
  "baths": 1,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-07",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 79000,
      "count": 4,
      "verified": false
    },
    "jeonse": {
      "price": 50000,
      "count": 6,
      "verified": true
    },
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 74307
    },
    {
      "d": "2026-02",
      "p": 76512
    },
    {
      "d": "2026-05",
      "p": 77427
    },
    {
      "d": "2026-07",
      "p": 78824
    },
    {
      "d": "2026-08",
      "p": 79000
    }
  ],
  "agent": "사당공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 동작구",
  "lat": 37.4823,
  "lng": 126.9787
},
{
  "id": "L046",
  "addr": "서울시 관악구 봉천동 관악푸르지오 303동",
  "region": "서울",
  "type": "아파트",
  "area": 59,
  "floor": 7,
  "rooms": 2,
  "baths": 1,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 62000,
      "count": 4,
      "verified": true
    },
    "jeonse": {
      "price": 41000,
      "count": 2,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 120,
      "mgmt": 9,
      "count": 8,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 59998,
      "verified": true
    },
    "auction": {
      "caseNo": "2026타경341",
      "court": "서울남부지방법원",
      "appraised": 62000,
      "minBid": 47124,
      "failedCount": 0,
      "saleDate": "2026-12-27"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 59966
    },
    {
      "d": "2026-02",
      "p": 61676
    },
    {
      "d": "2026-05",
      "p": 63339
    },
    {
      "d": "2026-07",
      "p": 64183
    },
    {
      "d": "2026-08",
      "p": 62000
    }
  ],
  "agent": "관악공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 관악구",
  "lat": 37.4791,
  "lng": 126.954
},
{
  "id": "L047",
  "addr": "서울시 종로구 창신동 창신 빌라",
  "region": "서울",
  "type": "빌라",
  "area": 42,
  "floor": 2,
  "rooms": 2,
  "baths": 1,
  "park": false,
  "elev": false,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=75",
  "deals": {
    "sale": {
      "price": 28000,
      "count": 3,
      "verified": true
    },
    "jeonse": {
      "price": 19000,
      "count": 4,
      "verified": true
    },
    "wolse": {
      "deposit": 1000,
      "rent": 70,
      "mgmt": 0,
      "count": 8,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 27418,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 26307
    },
    {
      "d": "2026-02",
      "p": 26826
    },
    {
      "d": "2026-05",
      "p": 27196
    },
    {
      "d": "2026-07",
      "p": 27586
    },
    {
      "d": "2026-08",
      "p": 28000
    }
  ],
  "agent": "창신동공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 종로구",
  "lat": 37.5756,
  "lng": 127.0104
},
{
  "id": "L048",
  "addr": "서울시 중구 황학동 오피스텔 독립형",
  "region": "서울",
  "type": "오피스텔",
  "area": 33,
  "floor": 12,
  "rooms": 1,
  "baths": 1,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=75",
  "deals": {
    "sale": {
      "price": 35000,
      "count": 1,
      "verified": false
    },
    "jeonse": {
      "price": 20000,
      "count": 4,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 80,
      "mgmt": 18,
      "count": 9,
      "verified": false
    },
    "direct": {
      "dtype": "sale",
      "price": 33362,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 32674
    },
    {
      "d": "2026-02",
      "p": 33441
    },
    {
      "d": "2026-05",
      "p": 33932
    },
    {
      "d": "2026-07",
      "p": 34352
    },
    {
      "d": "2026-08",
      "p": 35000
    }
  ],
  "agent": "중구공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 중구",
  "lat": 37.5689,
  "lng": 127.0136
},
{
  "id": "L049",
  "addr": "경기도 성남시 분당구 정자동 파크뷰 101동",
  "region": "경기",
  "type": "아파트",
  "area": 84,
  "floor": 12,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 135000,
      "count": 2,
      "verified": true
    },
    "jeonse": {
      "price": 82000,
      "count": 5,
      "verified": true
    },
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 122617
    },
    {
      "d": "2026-02",
      "p": 124494
    },
    {
      "d": "2026-05",
      "p": 126064
    },
    {
      "d": "2026-07",
      "p": 128952
    },
    {
      "d": "2026-08",
      "p": 135000
    }
  ],
  "agent": "분당정자공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 성남시 분당구",
  "lat": 37.3621,
  "lng": 127.1152
},
{
  "id": "L050",
  "addr": "경기도 수원시 팔달구 인계동 수원sk뷰 205동",
  "region": "경기",
  "type": "아파트",
  "area": 84,
  "floor": 9,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=75",
  "deals": {
    "sale": {
      "price": 72000,
      "count": 8,
      "verified": true
    },
    "jeonse": {
      "price": 48000,
      "count": 5,
      "verified": true
    },
    "wolse": {
      "deposit": 3000,
      "rent": 130,
      "mgmt": 6,
      "count": 9,
      "verified": true
    },
    "direct": {
      "dtype": "jeonse",
      "price": 47291,
      "verified": true
    },
    "auction": {
      "caseNo": "2026타경9000",
      "court": "수원지방법원",
      "appraised": 72000,
      "minBid": 52121,
      "failedCount": 0,
      "saleDate": "2026-11-27"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 67918
    },
    {
      "d": "2026-02",
      "p": 69428
    },
    {
      "d": "2026-05",
      "p": 71493
    },
    {
      "d": "2026-07",
      "p": 73143
    },
    {
      "d": "2026-08",
      "p": 72000
    }
  ],
  "agent": "수원팔달공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 수원시 팔달구",
  "lat": 37.2651,
  "lng": 127.0398
},
{
  "id": "L051",
  "addr": "경기도 용인시 수지구 상현동 광교상현더샵 302동",
  "region": "경기",
  "type": "아파트",
  "area": 84,
  "floor": 6,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 102000,
      "count": 3,
      "verified": true
    },
    "jeonse": {
      "price": 64000,
      "count": 1,
      "verified": true
    },
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 92907
    },
    {
      "d": "2026-02",
      "p": 95113
    },
    {
      "d": "2026-05",
      "p": 97686
    },
    {
      "d": "2026-07",
      "p": 99650
    },
    {
      "d": "2026-08",
      "p": 102000
    }
  ],
  "agent": "용인수지공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 용인시 수지구",
  "lat": 37.3134,
  "lng": 127.0467
},
{
  "id": "L052",
  "addr": "경기도 화성시 동탄2신도시 동탄역롯데캐슬 402동",
  "region": "경기",
  "type": "아파트",
  "area": 84,
  "floor": 11,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=75",
  "deals": {
    "sale": {
      "price": 89000,
      "count": 7,
      "verified": true
    },
    "jeonse": {
      "price": 55000,
      "count": 1,
      "verified": false
    },
    "wolse": {
      "deposit": 5000,
      "rent": 150,
      "mgmt": 17,
      "count": 3,
      "verified": true
    },
    "direct": {
      "dtype": "jeonse",
      "price": 53463,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 78397
    },
    {
      "d": "2026-02",
      "p": 79298
    },
    {
      "d": "2026-05",
      "p": 81491
    },
    {
      "d": "2026-07",
      "p": 83779
    },
    {
      "d": "2026-08",
      "p": 89000
    }
  ],
  "agent": "동탄역세권공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 화성시",
  "lat": 37.2058,
  "lng": 127.0803
},
{
  "id": "L053",
  "addr": "경기도 고양시 일산동구 마두동 강촌마을 203동",
  "region": "경기",
  "type": "아파트",
  "area": 59,
  "floor": 5,
  "rooms": 2,
  "baths": 1,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 52000,
      "count": 7,
      "verified": false
    },
    "jeonse": {
      "price": 36000,
      "count": 3,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 100,
      "mgmt": 17,
      "count": 1,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 49410
    },
    {
      "d": "2026-02",
      "p": 50777
    },
    {
      "d": "2026-05",
      "p": 51697
    },
    {
      "d": "2026-07",
      "p": 52855
    },
    {
      "d": "2026-08",
      "p": 52000
    }
  ],
  "agent": "일산강촌공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 고양시 일산동구",
  "lat": 37.6617,
  "lng": 126.7759
},
{
  "id": "L054",
  "addr": "경기도 김포시 장기동 한강메트로자이 601동",
  "region": "경기",
  "type": "아파트",
  "area": 84,
  "floor": 18,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-13",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 63000,
      "count": 7,
      "verified": false
    },
    "jeonse": {
      "price": 42000,
      "count": 6,
      "verified": true
    },
    "wolse": {
      "deposit": 3000,
      "rent": 120,
      "mgmt": 17,
      "count": 7,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 61893,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 59904
    },
    {
      "d": "2026-02",
      "p": 60632
    },
    {
      "d": "2026-05",
      "p": 62295
    },
    {
      "d": "2026-07",
      "p": 63987
    },
    {
      "d": "2026-08",
      "p": 63000
    }
  ],
  "agent": "김포한강공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 김포시",
  "lat": 37.6156,
  "lng": 126.7148
},
{
  "id": "L055",
  "addr": "경기도 파주시 운정동 운정한빛마을 101동",
  "region": "경기",
  "type": "아파트",
  "area": 74,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-12",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 55000,
      "count": 5,
      "verified": true
    },
    "jeonse": {
      "price": 37000,
      "count": 2,
      "verified": false
    },
    "wolse": {
      "deposit": 2000,
      "rent": 110,
      "mgmt": 15,
      "count": 4,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 50138
    },
    {
      "d": "2026-02",
      "p": 51150
    },
    {
      "d": "2026-05",
      "p": 52356
    },
    {
      "d": "2026-07",
      "p": 53762
    },
    {
      "d": "2026-08",
      "p": 55000
    }
  ],
  "agent": "파주운정공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 파주시",
  "lat": 37.7122,
  "lng": 126.7198
},
{
  "id": "L056",
  "addr": "경기도 남양주시 별내동 별내역센트럴자이 203동",
  "region": "경기",
  "type": "아파트",
  "area": 74,
  "floor": 10,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-11",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 67000,
      "count": 5,
      "verified": false
    },
    "jeonse": {
      "price": 44000,
      "count": 5,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 64490,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 62043
    },
    {
      "d": "2026-02",
      "p": 63141
    },
    {
      "d": "2026-05",
      "p": 64500
    },
    {
      "d": "2026-07",
      "p": 65473
    },
    {
      "d": "2026-08",
      "p": 67000
    }
  ],
  "agent": "남양주별내공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 남양주시",
  "lat": 37.648,
  "lng": 127.1488
},
{
  "id": "L057",
  "addr": "경기도 의정부시 민락동 의정부민락자이 301동",
  "region": "경기",
  "type": "아파트",
  "area": 59,
  "floor": 7,
  "rooms": 2,
  "baths": 1,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-10",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 42000,
      "count": 6,
      "verified": true
    },
    "jeonse": {
      "price": 29000,
      "count": 6,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 90,
      "mgmt": 14,
      "count": 6,
      "verified": true
    },
    "direct": {
      "dtype": "jeonse",
      "price": 28138,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 38192
    },
    {
      "d": "2026-02",
      "p": 39106
    },
    {
      "d": "2026-05",
      "p": 39930
    },
    {
      "d": "2026-07",
      "p": 40482
    },
    {
      "d": "2026-08",
      "p": 42000
    }
  ],
  "agent": "의정부공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 의정부시",
  "lat": 37.7457,
  "lng": 127.102
},
{
  "id": "L058",
  "addr": "경기도 안산시 단원구 고잔동 중앙역푸르지오 102동",
  "region": "경기",
  "type": "아파트",
  "area": 84,
  "floor": 6,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-09",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 57000,
      "count": 7,
      "verified": true
    },
    "jeonse": {
      "price": 38000,
      "count": 1,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "jeonse",
      "price": 37022,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 52426
    },
    {
      "d": "2026-02",
      "p": 53658
    },
    {
      "d": "2026-05",
      "p": 54743
    },
    {
      "d": "2026-07",
      "p": 56159
    },
    {
      "d": "2026-08",
      "p": 57000
    }
  ],
  "agent": "안산고잔공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 안산시 단원구",
  "lat": 37.3197,
  "lng": 126.8249
},
{
  "id": "L059",
  "addr": "경기도 평택시 지제동 지제역더샵센트럴시티 502동",
  "region": "경기",
  "type": "아파트",
  "area": 84,
  "floor": 15,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-08",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 73000,
      "count": 6,
      "verified": false
    },
    "jeonse": {
      "price": 47000,
      "count": 2,
      "verified": true
    },
    "wolse": {
      "deposit": 3000,
      "rent": 130,
      "mgmt": 8,
      "count": 4,
      "verified": false
    },
    "direct": {
      "dtype": "jeonse",
      "price": 45799,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 67232
    },
    {
      "d": "2026-02",
      "p": 69095
    },
    {
      "d": "2026-05",
      "p": 70581
    },
    {
      "d": "2026-07",
      "p": 72300
    },
    {
      "d": "2026-08",
      "p": 73000
    }
  ],
  "agent": "평택지제공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 평택시",
  "lat": 36.9873,
  "lng": 127.108
},
{
  "id": "L060",
  "addr": "경기도 오산시 세교동 세교휴먼시아 203동",
  "region": "경기",
  "type": "아파트",
  "area": 74,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 44000,
      "count": 2,
      "verified": true
    },
    "jeonse": {
      "price": 30000,
      "count": 2,
      "verified": false
    },
    "wolse": {
      "deposit": 2000,
      "rent": 95,
      "mgmt": 16,
      "count": 9,
      "verified": true
    },
    "direct": {
      "dtype": "jeonse",
      "price": 28645,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 40559
    },
    {
      "d": "2026-02",
      "p": 41395
    },
    {
      "d": "2026-05",
      "p": 42271
    },
    {
      "d": "2026-07",
      "p": 42961
    },
    {
      "d": "2026-08",
      "p": 44000
    }
  ],
  "agent": "오산세교공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 오산시",
  "lat": 37.1626,
  "lng": 127.0721
},
{
  "id": "L061",
  "addr": "경기도 광명시 하안동 하안주공2단지 103동",
  "region": "경기",
  "type": "아파트",
  "area": 49,
  "floor": 4,
  "rooms": 2,
  "baths": 1,
  "park": false,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 43000,
      "count": 8,
      "verified": true
    },
    "jeonse": {
      "price": 29000,
      "count": 6,
      "verified": true
    },
    "wolse": {
      "deposit": 1500,
      "rent": 80,
      "mgmt": 12,
      "count": 5,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 41326,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 39715
    },
    {
      "d": "2026-02",
      "p": 40302
    },
    {
      "d": "2026-05",
      "p": 41059
    },
    {
      "d": "2026-07",
      "p": 42055
    },
    {
      "d": "2026-08",
      "p": 43000
    }
  ],
  "agent": "광명하안공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 광명시",
  "lat": 37.4786,
  "lng": 126.8638
},
{
  "id": "L062",
  "addr": "경기도 시흥시 배곧동 배곧스마트시티 401동",
  "region": "경기",
  "type": "아파트",
  "area": 84,
  "floor": 12,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 66000,
      "count": 3,
      "verified": false
    },
    "jeonse": {
      "price": 43000,
      "count": 4,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 62869,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 61303
    },
    {
      "d": "2026-02",
      "p": 62425
    },
    {
      "d": "2026-05",
      "p": 63307
    },
    {
      "d": "2026-07",
      "p": 64472
    },
    {
      "d": "2026-08",
      "p": 66000
    }
  ],
  "agent": "시흥배곧공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 시흥시",
  "lat": 37.3716,
  "lng": 126.7349
},
{
  "id": "L063",
  "addr": "경기도 안양시 동안구 비산동 평촌래미안자이 204동",
  "region": "경기",
  "type": "아파트",
  "area": 84,
  "floor": 10,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 86000,
      "count": 7,
      "verified": true
    },
    "jeonse": {
      "price": 54000,
      "count": 3,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "jeonse",
      "price": 53105,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 81366
    },
    {
      "d": "2026-02",
      "p": 83481
    },
    {
      "d": "2026-05",
      "p": 85814
    },
    {
      "d": "2026-07",
      "p": 87510
    },
    {
      "d": "2026-08",
      "p": 86000
    }
  ],
  "agent": "안양평촌공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 안양시 동안구",
  "lat": 37.3896,
  "lng": 126.9538
},
{
  "id": "L064",
  "addr": "인천시 부평구 부평동 부평힐스테이트 302동",
  "region": "인천",
  "type": "아파트",
  "area": 84,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 65000,
      "count": 7,
      "verified": true
    },
    "jeonse": {
      "price": 43000,
      "count": 4,
      "verified": true
    },
    "wolse": {
      "deposit": 3000,
      "rent": 120,
      "mgmt": 14,
      "count": 9,
      "verified": false
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 60960
    },
    {
      "d": "2026-02",
      "p": 61735
    },
    {
      "d": "2026-05",
      "p": 62922
    },
    {
      "d": "2026-07",
      "p": 63614
    },
    {
      "d": "2026-08",
      "p": 65000
    }
  ],
  "agent": "부평힐스테이트공인중개사",
  "agentType": "공인중개사",
  "region2": "인천광역시 부평구",
  "lat": 37.4912,
  "lng": 126.7224
},
{
  "id": "L065",
  "addr": "인천시 남동구 구월동 구월아시아드선수촌아파트 201동",
  "region": "인천",
  "type": "아파트",
  "area": 84,
  "floor": 7,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 58000,
      "count": 7,
      "verified": true
    },
    "jeonse": {
      "price": 38000,
      "count": 4,
      "verified": true
    },
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 56259
    },
    {
      "d": "2026-02",
      "p": 57215
    },
    {
      "d": "2026-05",
      "p": 58531
    },
    {
      "d": "2026-07",
      "p": 60030
    },
    {
      "d": "2026-08",
      "p": 58000
    }
  ],
  "agent": "구월동공인중개사",
  "agentType": "공인중개사",
  "region2": "인천광역시 남동구",
  "lat": 37.4469,
  "lng": 126.7223
},
{
  "id": "L066",
  "addr": "인천시 서구 청라동 청라국제도시자이 602동",
  "region": "인천",
  "type": "아파트",
  "area": 84,
  "floor": 15,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 72000,
      "count": 1,
      "verified": true
    },
    "jeonse": {
      "price": 46000,
      "count": 2,
      "verified": false
    },
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 70024,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 67892
    },
    {
      "d": "2026-02",
      "p": 69612
    },
    {
      "d": "2026-05",
      "p": 70541
    },
    {
      "d": "2026-07",
      "p": 72103
    },
    {
      "d": "2026-08",
      "p": 72000
    }
  ],
  "agent": "청라자이공인중개사",
  "agentType": "공인중개사",
  "region2": "인천광역시 서구",
  "lat": 37.5401,
  "lng": 126.6609
},
{
  "id": "L067",
  "addr": "인천시 미추홀구 주안동 주안두산위브트레지움 501동",
  "region": "인천",
  "type": "아파트",
  "area": 74,
  "floor": 9,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 49000,
      "count": 2,
      "verified": true
    },
    "jeonse": {
      "price": 33000,
      "count": 3,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 105,
      "mgmt": 11,
      "count": 7,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 44190
    },
    {
      "d": "2026-02",
      "p": 45248
    },
    {
      "d": "2026-05",
      "p": 45973
    },
    {
      "d": "2026-07",
      "p": 47061
    },
    {
      "d": "2026-08",
      "p": 49000
    }
  ],
  "agent": "주안공인중개사",
  "agentType": "공인중개사",
  "region2": "인천광역시 미추홀구",
  "lat": 37.4625,
  "lng": 126.6916
},
{
  "id": "L068",
  "addr": "인천시 계양구 계산동 계산역센트럴자이 302동",
  "region": "인천",
  "type": "아파트",
  "area": 74,
  "floor": 11,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 53000,
      "count": 6,
      "verified": true
    },
    "jeonse": {
      "price": 36000,
      "count": 6,
      "verified": true
    },
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 50562
    },
    {
      "d": "2026-02",
      "p": 51174
    },
    {
      "d": "2026-05",
      "p": 52669
    },
    {
      "d": "2026-07",
      "p": 53865
    },
    {
      "d": "2026-08",
      "p": 53000
    }
  ],
  "agent": "계양계산공인중개사",
  "agentType": "공인중개사",
  "region2": "인천광역시 계양구",
  "lat": 37.5321,
  "lng": 126.7289
},
{
  "id": "L069",
  "addr": "부산시 수영구 민락동 수영더샵 202동",
  "region": "부산",
  "type": "아파트",
  "area": 84,
  "floor": 14,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 82000,
      "count": 5,
      "verified": true
    },
    "jeonse": {
      "price": 45000,
      "count": 5,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "jeonse",
      "price": 43816,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 73971
    },
    {
      "d": "2026-02",
      "p": 76093
    },
    {
      "d": "2026-05",
      "p": 77278
    },
    {
      "d": "2026-07",
      "p": 78747
    },
    {
      "d": "2026-08",
      "p": 82000
    }
  ],
  "agent": "수영더샵공인중개사",
  "agentType": "공인중개사",
  "region2": "부산광역시 수영구",
  "lat": 35.1704,
  "lng": 129.1248
},
{
  "id": "L070",
  "addr": "부산시 동래구 안락동 동래래미안아이파크 302동",
  "region": "부산",
  "type": "아파트",
  "area": 84,
  "floor": 10,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 68000,
      "count": 1,
      "verified": true
    },
    "jeonse": {
      "price": 42000,
      "count": 3,
      "verified": false
    },
    "wolse": null,
    "direct": {
      "dtype": "jeonse",
      "price": 40471,
      "verified": true
    },
    "auction": {
      "caseNo": "2026타경8564",
      "court": "부산지방법원",
      "appraised": 68000,
      "minBid": 53736,
      "failedCount": 1,
      "saleDate": "2026-12-01"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 65642
    },
    {
      "d": "2026-02",
      "p": 66410
    },
    {
      "d": "2026-05",
      "p": 68030
    },
    {
      "d": "2026-07",
      "p": 69375
    },
    {
      "d": "2026-08",
      "p": 68000
    }
  ],
  "agent": "동래공인중개사",
  "agentType": "공인중개사",
  "region2": "부산광역시 동래구",
  "lat": 35.2109,
  "lng": 129.0838
},
{
  "id": "L071",
  "addr": "부산시 남구 대연동 대연한화꿈에그린 503동",
  "region": "부산",
  "type": "아파트",
  "area": 59,
  "floor": 7,
  "rooms": 2,
  "baths": 1,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 44000,
      "count": 1,
      "verified": false
    },
    "jeonse": {
      "price": 28000,
      "count": 2,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 90,
      "mgmt": 8,
      "count": 5,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 42666
    },
    {
      "d": "2026-02",
      "p": 43562
    },
    {
      "d": "2026-05",
      "p": 44304
    },
    {
      "d": "2026-07",
      "p": 45149
    },
    {
      "d": "2026-08",
      "p": 44000
    }
  ],
  "agent": "남구대연공인중개사",
  "agentType": "공인중개사",
  "region2": "부산광역시 남구",
  "lat": 35.1342,
  "lng": 129.0786
},
{
  "id": "L072",
  "addr": "부산시 북구 화명동 화명롯데캐슬카이저 801동",
  "region": "부산",
  "type": "아파트",
  "area": 84,
  "floor": 20,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 52000,
      "count": 2,
      "verified": true
    },
    "jeonse": {
      "price": 32000,
      "count": 6,
      "verified": false
    },
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 50330
    },
    {
      "d": "2026-02",
      "p": 51361
    },
    {
      "d": "2026-05",
      "p": 52165
    },
    {
      "d": "2026-07",
      "p": 52791
    },
    {
      "d": "2026-08",
      "p": 52000
    }
  ],
  "agent": "화명공인중개사",
  "agentType": "공인중개사",
  "region2": "부산광역시 북구",
  "lat": 35.2411,
  "lng": 128.9971
},
{
  "id": "L073",
  "addr": "부산시 사하구 당리동 당리아이파크 301동",
  "region": "부산",
  "type": "아파트",
  "area": 74,
  "floor": 9,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 41000,
      "count": 1,
      "verified": true
    },
    "jeonse": {
      "price": 26000,
      "count": 2,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 85,
      "mgmt": 5,
      "count": 9,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 39996,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 36458
    },
    {
      "d": "2026-02",
      "p": 36831
    },
    {
      "d": "2026-05",
      "p": 37408
    },
    {
      "d": "2026-07",
      "p": 38140
    },
    {
      "d": "2026-08",
      "p": 41000
    }
  ],
  "agent": "사하공인중개사",
  "agentType": "공인중개사",
  "region2": "부산광역시 사하구",
  "lat": 35.0951,
  "lng": 128.986
},
{
  "id": "L074",
  "addr": "부산시 기장군 일광면 일광자이 402동",
  "region": "부산",
  "type": "아파트",
  "area": 84,
  "floor": 12,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-13",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 55000,
      "count": 2,
      "verified": true
    },
    "jeonse": {
      "price": 35000,
      "count": 4,
      "verified": true
    },
    "wolse": {
      "deposit": 3000,
      "rent": 120,
      "mgmt": 14,
      "count": 1,
      "verified": false
    },
    "direct": {
      "dtype": "sale",
      "price": 54338,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 49628
    },
    {
      "d": "2026-02",
      "p": 50678
    },
    {
      "d": "2026-05",
      "p": 51606
    },
    {
      "d": "2026-07",
      "p": 52737
    },
    {
      "d": "2026-08",
      "p": 55000
    }
  ],
  "agent": "기장일광공인중개사",
  "agentType": "공인중개사",
  "region2": "부산광역시 기장군",
  "lat": 35.2789,
  "lng": 129.2207
},
{
  "id": "L075",
  "addr": "부산시 연제구 연산동 연산동 빌라 3층",
  "region": "부산",
  "type": "빌라",
  "area": 52,
  "floor": 3,
  "rooms": 2,
  "baths": 1,
  "park": true,
  "elev": false,
  "confirmed": "2026-08-12",
  "img": "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=75",
  "deals": {
    "sale": {
      "price": 18000,
      "count": 8,
      "verified": true
    },
    "jeonse": {
      "price": 12000,
      "count": 5,
      "verified": true
    },
    "wolse": {
      "deposit": 1000,
      "rent": 55,
      "mgmt": 0,
      "count": 5,
      "verified": true
    },
    "direct": {
      "dtype": "jeonse",
      "price": 11447,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 16853
    },
    {
      "d": "2026-02",
      "p": 17110
    },
    {
      "d": "2026-05",
      "p": 17308
    },
    {
      "d": "2026-07",
      "p": 17564
    },
    {
      "d": "2026-08",
      "p": 18000
    }
  ],
  "agent": "연산공인중개사",
  "agentType": "공인중개사",
  "region2": "부산광역시 연제구",
  "lat": 35.1914,
  "lng": 129.0742
},
{
  "id": "L076",
  "addr": "대구시 달서구 월성동 월성두산위브 202동",
  "region": "대구",
  "type": "아파트",
  "area": 84,
  "floor": 11,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 53000,
      "count": 8,
      "verified": true
    },
    "jeonse": {
      "price": 34000,
      "count": 2,
      "verified": true
    },
    "wolse": {
      "deposit": 3000,
      "rent": 110,
      "mgmt": 9,
      "count": 8,
      "verified": false
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 49453
    },
    {
      "d": "2026-02",
      "p": 50742
    },
    {
      "d": "2026-05",
      "p": 51450
    },
    {
      "d": "2026-07",
      "p": 52082
    },
    {
      "d": "2026-08",
      "p": 53000
    }
  ],
  "agent": "달서월성공인중개사",
  "agentType": "공인중개사",
  "region2": "대구광역시 달서구",
  "lat": 35.8389,
  "lng": 128.5249
},
{
  "id": "L077",
  "addr": "대구시 북구 칠성동 대구역한신더휴 502동",
  "region": "대구",
  "type": "아파트",
  "area": 74,
  "floor": 9,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 48000,
      "count": 2,
      "verified": false
    },
    "jeonse": {
      "price": 31000,
      "count": 3,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 100,
      "mgmt": 18,
      "count": 5,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 43416
    },
    {
      "d": "2026-02",
      "p": 44319
    },
    {
      "d": "2026-05",
      "p": 45150
    },
    {
      "d": "2026-07",
      "p": 46141
    },
    {
      "d": "2026-08",
      "p": 48000
    }
  ],
  "agent": "대구북구공인중개사",
  "agentType": "공인중개사",
  "region2": "대구광역시 북구",
  "lat": 35.8791,
  "lng": 128.5952
},
{
  "id": "L078",
  "addr": "대구시 동구 신서동 혁신도시이편한세상 301동",
  "region": "대구",
  "type": "아파트",
  "area": 84,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 61000,
      "count": 1,
      "verified": false
    },
    "jeonse": {
      "price": 39000,
      "count": 6,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "jeonse",
      "price": 38609,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 55159
    },
    {
      "d": "2026-02",
      "p": 55754
    },
    {
      "d": "2026-05",
      "p": 57154
    },
    {
      "d": "2026-07",
      "p": 58263
    },
    {
      "d": "2026-08",
      "p": 61000
    }
  ],
  "agent": "동구혁신공인중개사",
  "agentType": "공인중개사",
  "region2": "대구광역시 동구",
  "lat": 35.8839,
  "lng": 128.7023
},
{
  "id": "L079",
  "addr": "대구시 달성군 다사읍 세천리 달성군다사 힐스테이트 202동",
  "region": "대구",
  "type": "아파트",
  "area": 84,
  "floor": 7,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 47000,
      "count": 8,
      "verified": true
    },
    "jeonse": {
      "price": 30000,
      "count": 4,
      "verified": true
    },
    "wolse": {
      "deposit": 3000,
      "rent": 100,
      "mgmt": 10,
      "count": 6,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 45270,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 42579
    },
    {
      "d": "2026-02",
      "p": 43809
    },
    {
      "d": "2026-05",
      "p": 44959
    },
    {
      "d": "2026-07",
      "p": 45903
    },
    {
      "d": "2026-08",
      "p": 47000
    }
  ],
  "agent": "달성다사공인중개사",
  "agentType": "공인중개사",
  "region2": "대구광역시 달성군",
  "lat": 35.8408,
  "lng": 128.4667
},
{
  "id": "L080",
  "addr": "대구시 중구 삼덕동 삼덕오피스텔",
  "region": "대구",
  "type": "오피스텔",
  "area": 33,
  "floor": 8,
  "rooms": 1,
  "baths": 1,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=75",
  "deals": {
    "sale": {
      "price": 21000,
      "count": 7,
      "verified": true
    },
    "jeonse": {
      "price": 13000,
      "count": 1,
      "verified": true
    },
    "wolse": {
      "deposit": 1000,
      "rent": 65,
      "mgmt": 13,
      "count": 8,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 19662
    },
    {
      "d": "2026-02",
      "p": 20157
    },
    {
      "d": "2026-05",
      "p": 20440
    },
    {
      "d": "2026-07",
      "p": 20868
    },
    {
      "d": "2026-08",
      "p": 21000
    }
  ],
  "agent": "중구오피스텔공인중개사",
  "agentType": "공인중개사",
  "region2": "대구광역시 중구",
  "lat": 35.8651,
  "lng": 128.5979
},
{
  "id": "L081",
  "addr": "광주시 서구 쌍촌동 쌍촌역상무자이 302동",
  "region": "광주",
  "type": "아파트",
  "area": 84,
  "floor": 11,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 58000,
      "count": 1,
      "verified": true
    },
    "jeonse": {
      "price": 37000,
      "count": 5,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 55820,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 53169
    },
    {
      "d": "2026-02",
      "p": 53939
    },
    {
      "d": "2026-05",
      "p": 55386
    },
    {
      "d": "2026-07",
      "p": 56065
    },
    {
      "d": "2026-08",
      "p": 58000
    }
  ],
  "agent": "쌍촌상무공인중개사",
  "agentType": "공인중개사",
  "region2": "광주광역시 서구",
  "lat": 35.1502,
  "lng": 126.8636
},
{
  "id": "L082",
  "addr": "광주시 북구 운암동 운암힐스테이트 201동",
  "region": "광주",
  "type": "아파트",
  "area": 74,
  "floor": 9,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 44000,
      "count": 5,
      "verified": true
    },
    "jeonse": {
      "price": 28000,
      "count": 3,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 90,
      "mgmt": 12,
      "count": 8,
      "verified": true
    },
    "direct": null,
    "auction": {
      "caseNo": "2026타경6898",
      "court": "광주지방법원",
      "appraised": 44000,
      "minBid": 33072,
      "failedCount": 0,
      "saleDate": "2026-08-09"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 40065
    },
    {
      "d": "2026-02",
      "p": 41096
    },
    {
      "d": "2026-05",
      "p": 41726
    },
    {
      "d": "2026-07",
      "p": 42145
    },
    {
      "d": "2026-08",
      "p": 44000
    }
  ],
  "agent": "광주북구공인중개사",
  "agentType": "공인중개사",
  "region2": "광주광역시 북구",
  "lat": 35.1762,
  "lng": 126.9009
},
{
  "id": "L083",
  "addr": "광주시 광산구 수완동 수완지구 푸르지오 402동",
  "region": "광주",
  "type": "아파트",
  "area": 84,
  "floor": 15,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 52000,
      "count": 3,
      "verified": true
    },
    "jeonse": {
      "price": 34000,
      "count": 4,
      "verified": true
    },
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 47265
    },
    {
      "d": "2026-02",
      "p": 47915
    },
    {
      "d": "2026-05",
      "p": 49062
    },
    {
      "d": "2026-07",
      "p": 50113
    },
    {
      "d": "2026-08",
      "p": 52000
    }
  ],
  "agent": "수완지구공인중개사",
  "agentType": "공인중개사",
  "region2": "광주광역시 광산구",
  "lat": 35.1934,
  "lng": 126.7984
},
{
  "id": "L084",
  "addr": "광주시 동구 학동 학동역참선비 오피스텔",
  "region": "광주",
  "type": "오피스텔",
  "area": 28,
  "floor": 5,
  "rooms": 1,
  "baths": 1,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=75",
  "deals": {
    "sale": {
      "price": 15000,
      "count": 8,
      "verified": true
    },
    "jeonse": {
      "price": 9000,
      "count": 4,
      "verified": true
    },
    "wolse": {
      "deposit": 500,
      "rent": 48,
      "mgmt": 15,
      "count": 3,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 14374
    },
    {
      "d": "2026-02",
      "p": 14769
    },
    {
      "d": "2026-05",
      "p": 15046
    },
    {
      "d": "2026-07",
      "p": 15354
    },
    {
      "d": "2026-08",
      "p": 15000
    }
  ],
  "agent": "광주동구공인중개사",
  "agentType": "공인중개사",
  "region2": "광주광역시 동구",
  "lat": 35.1428,
  "lng": 126.9213
},
{
  "id": "L085",
  "addr": "대전시 서구 둔산동 크로바아파트 201동",
  "region": "대전",
  "type": "아파트",
  "area": 84,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 68000,
      "count": 2,
      "verified": true
    },
    "jeonse": {
      "price": 44000,
      "count": 3,
      "verified": true
    },
    "wolse": {
      "deposit": 3000,
      "rent": 130,
      "mgmt": 16,
      "count": 7,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 66918,
      "verified": true
    },
    "auction": {
      "caseNo": "2026타경8964",
      "court": "대전지방법원",
      "appraised": 68000,
      "minBid": 49368,
      "failedCount": 1,
      "saleDate": "2026-11-28"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 60059
    },
    {
      "d": "2026-02",
      "p": 60741
    },
    {
      "d": "2026-05",
      "p": 62115
    },
    {
      "d": "2026-07",
      "p": 63880
    },
    {
      "d": "2026-08",
      "p": 68000
    }
  ],
  "agent": "둔산크로바공인중개사",
  "agentType": "공인중개사",
  "region2": "대전광역시 서구",
  "lat": 36.3504,
  "lng": 127.3845
},
{
  "id": "L086",
  "addr": "대전시 서구 관저동 관저더샵 502동",
  "region": "대전",
  "type": "아파트",
  "area": 84,
  "floor": 12,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 58000,
      "count": 2,
      "verified": true
    },
    "jeonse": {
      "price": 38000,
      "count": 6,
      "verified": true
    },
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 52911
    },
    {
      "d": "2026-02",
      "p": 53895
    },
    {
      "d": "2026-05",
      "p": 54697
    },
    {
      "d": "2026-07",
      "p": 55694
    },
    {
      "d": "2026-08",
      "p": 58000
    }
  ],
  "agent": "관저더샵공인중개사",
  "agentType": "공인중개사",
  "region2": "대전광역시 서구",
  "lat": 36.3017,
  "lng": 127.357
},
{
  "id": "L087",
  "addr": "대전시 중구 문화동 문화SK 뷰 301동",
  "region": "대전",
  "type": "아파트",
  "area": 74,
  "floor": 10,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 46000,
      "count": 7,
      "verified": true
    },
    "jeonse": {
      "price": 30000,
      "count": 2,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 95,
      "mgmt": 14,
      "count": 3,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 44545,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 44201
    },
    {
      "d": "2026-02",
      "p": 45054
    },
    {
      "d": "2026-05",
      "p": 45763
    },
    {
      "d": "2026-07",
      "p": 46720
    },
    {
      "d": "2026-08",
      "p": 46000
    }
  ],
  "agent": "대전중구공인중개사",
  "agentType": "공인중개사",
  "region2": "대전광역시 중구",
  "lat": 36.3229,
  "lng": 127.4048
},
{
  "id": "L088",
  "addr": "대전시 동구 가오동 가오역 힐스테이트 401동",
  "region": "대전",
  "type": "아파트",
  "area": 84,
  "floor": 14,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 54000,
      "count": 7,
      "verified": true
    },
    "jeonse": {
      "price": 35000,
      "count": 4,
      "verified": true
    },
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 48672
    },
    {
      "d": "2026-02",
      "p": 49715
    },
    {
      "d": "2026-05",
      "p": 50783
    },
    {
      "d": "2026-07",
      "p": 52299
    },
    {
      "d": "2026-08",
      "p": 54000
    }
  ],
  "agent": "대전동구공인중개사",
  "agentType": "공인중개사",
  "region2": "대전광역시 동구",
  "lat": 36.3414,
  "lng": 127.4519
},
{
  "id": "L089",
  "addr": "대전시 유성구 봉명동 봉명역 더샵 202동",
  "region": "대전",
  "type": "아파트",
  "area": 59,
  "floor": 7,
  "rooms": 2,
  "baths": 1,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 42000,
      "count": 1,
      "verified": true
    },
    "jeonse": {
      "price": 27000,
      "count": 6,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 85,
      "mgmt": 5,
      "count": 8,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 41203,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 39991
    },
    {
      "d": "2026-02",
      "p": 40566
    },
    {
      "d": "2026-05",
      "p": 41125
    },
    {
      "d": "2026-07",
      "p": 41742
    },
    {
      "d": "2026-08",
      "p": 42000
    }
  ],
  "agent": "유성봉명공인중개사",
  "agentType": "공인중개사",
  "region2": "대전광역시 유성구",
  "lat": 36.3627,
  "lng": 127.3427
},
{
  "id": "L090",
  "addr": "울산시 남구 달동 현대에이치타운 301동",
  "region": "울산",
  "type": "아파트",
  "area": 84,
  "floor": 9,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 62000,
      "count": 1,
      "verified": true
    },
    "jeonse": {
      "price": 40000,
      "count": 4,
      "verified": false
    },
    "wolse": {
      "deposit": 3000,
      "rent": 120,
      "mgmt": 10,
      "count": 3,
      "verified": false
    },
    "direct": {
      "dtype": "jeonse",
      "price": 38281,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 57569
    },
    {
      "d": "2026-02",
      "p": 59263
    },
    {
      "d": "2026-05",
      "p": 60484
    },
    {
      "d": "2026-07",
      "p": 62193
    },
    {
      "d": "2026-08",
      "p": 62000
    }
  ],
  "agent": "울산남구공인중개사",
  "agentType": "공인중개사",
  "region2": "울산광역시 남구",
  "lat": 35.535,
  "lng": 129.3293
},
{
  "id": "L091",
  "addr": "울산시 북구 매곡동 화봉힐스테이트 202동",
  "region": "울산",
  "type": "아파트",
  "area": 74,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 45000,
      "count": 6,
      "verified": true
    },
    "jeonse": {
      "price": 29000,
      "count": 4,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 95,
      "mgmt": 7,
      "count": 4,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 44513,
      "verified": true
    },
    "auction": {
      "caseNo": "2026타경6564",
      "court": "울산지방법원",
      "appraised": 45000,
      "minBid": 36491,
      "failedCount": 1,
      "saleDate": "2026-08-26"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 39656
    },
    {
      "d": "2026-02",
      "p": 40478
    },
    {
      "d": "2026-05",
      "p": 41250
    },
    {
      "d": "2026-07",
      "p": 42217
    },
    {
      "d": "2026-08",
      "p": 45000
    }
  ],
  "agent": "울산북구공인중개사",
  "agentType": "공인중개사",
  "region2": "울산광역시 북구",
  "lat": 35.5917,
  "lng": 129.3608
},
{
  "id": "L092",
  "addr": "울산시 중구 학산동 태화강푸르지오 503동",
  "region": "울산",
  "type": "아파트",
  "area": 84,
  "floor": 15,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 55000,
      "count": 4,
      "verified": true
    },
    "jeonse": {
      "price": 36000,
      "count": 5,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "jeonse",
      "price": 34518,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 52478
    },
    {
      "d": "2026-02",
      "p": 53957
    },
    {
      "d": "2026-05",
      "p": 54822
    },
    {
      "d": "2026-07",
      "p": 55817
    },
    {
      "d": "2026-08",
      "p": 55000
    }
  ],
  "agent": "울산중구공인중개사",
  "agentType": "공인중개사",
  "region2": "울산광역시 중구",
  "lat": 35.5484,
  "lng": 129.3142
},
{
  "id": "L093",
  "addr": "청주시 흥덕구 가경동 가경아이파크 302동",
  "region": "충북",
  "type": "아파트",
  "area": 84,
  "floor": 10,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 38000,
      "count": 2,
      "verified": false
    },
    "jeonse": {
      "price": 25000,
      "count": 5,
      "verified": false
    },
    "wolse": {
      "deposit": 2000,
      "rent": 85,
      "mgmt": 12,
      "count": 6,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 37537,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 35978
    },
    {
      "d": "2026-02",
      "p": 36448
    },
    {
      "d": "2026-05",
      "p": 37114
    },
    {
      "d": "2026-07",
      "p": 37558
    },
    {
      "d": "2026-08",
      "p": 38000
    }
  ],
  "agent": "가경동공인중개사",
  "agentType": "공인중개사",
  "region2": "충북 청주시 흥덕구",
  "lat": 36.6181,
  "lng": 127.4423
},
{
  "id": "L094",
  "addr": "청주시 서원구 사창동 사창푸르지오 201동",
  "region": "충북",
  "type": "아파트",
  "area": 74,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 32000,
      "count": 6,
      "verified": true
    },
    "jeonse": {
      "price": 21000,
      "count": 4,
      "verified": true
    },
    "wolse": {
      "deposit": 1500,
      "rent": 75,
      "mgmt": 18,
      "count": 6,
      "verified": false
    },
    "direct": {
      "dtype": "sale",
      "price": 31096,
      "verified": true
    },
    "auction": {
      "caseNo": "2026타경2101",
      "court": "청주지방법원",
      "appraised": 32000,
      "minBid": 23095,
      "failedCount": 1,
      "saleDate": "2026-10-07"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 30893
    },
    {
      "d": "2026-02",
      "p": 31711
    },
    {
      "d": "2026-05",
      "p": 32086
    },
    {
      "d": "2026-07",
      "p": 32542
    },
    {
      "d": "2026-08",
      "p": 32000
    }
  ],
  "agent": "사창동공인중개사",
  "agentType": "공인중개사",
  "region2": "충북 청주시 서원구",
  "lat": 36.6323,
  "lng": 127.4691
},
{
  "id": "L095",
  "addr": "충주시 교현동 충주 힐스테이트 301동",
  "region": "충북",
  "type": "아파트",
  "area": 84,
  "floor": 9,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 28000,
      "count": 4,
      "verified": true
    },
    "jeonse": {
      "price": 18000,
      "count": 5,
      "verified": false
    },
    "wolse": {
      "deposit": 1500,
      "rent": 70,
      "mgmt": 18,
      "count": 9,
      "verified": true
    },
    "direct": {
      "dtype": "jeonse",
      "price": 17336,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 26909
    },
    {
      "d": "2026-02",
      "p": 27179
    },
    {
      "d": "2026-05",
      "p": 27917
    },
    {
      "d": "2026-07",
      "p": 28276
    },
    {
      "d": "2026-08",
      "p": 28000
    }
  ],
  "agent": "충주힐스테이트공인중개사",
  "agentType": "공인중개사",
  "region2": "충청북도 충주시",
  "lat": 36.9832,
  "lng": 127.9242
},
{
  "id": "L096",
  "addr": "제천시 의림지동 의림지 래미안 202동",
  "region": "충북",
  "type": "아파트",
  "area": 74,
  "floor": 7,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 19000,
      "count": 1,
      "verified": false
    },
    "jeonse": {
      "price": 12000,
      "count": 3,
      "verified": true
    },
    "wolse": {
      "deposit": 1000,
      "rent": 55,
      "mgmt": 8,
      "count": 6,
      "verified": false
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 16914
    },
    {
      "d": "2026-02",
      "p": 17104
    },
    {
      "d": "2026-05",
      "p": 17428
    },
    {
      "d": "2026-07",
      "p": 17728
    },
    {
      "d": "2026-08",
      "p": 19000
    }
  ],
  "agent": "제천래미안공인중개사",
  "agentType": "공인중개사",
  "region2": "충청북도 제천시",
  "lat": 37.1319,
  "lng": 128.1928
},
{
  "id": "L097",
  "addr": "음성군 금왕읍 오선리 음성자이 301동",
  "region": "충북",
  "type": "아파트",
  "area": 74,
  "floor": 6,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 17000,
      "count": 5,
      "verified": true
    },
    "jeonse": {
      "price": 11000,
      "count": 1,
      "verified": false
    },
    "wolse": {
      "deposit": 1000,
      "rent": 50,
      "mgmt": 12,
      "count": 7,
      "verified": true
    },
    "direct": {
      "dtype": "jeonse",
      "price": 10645,
      "verified": true
    },
    "auction": {
      "caseNo": "2026타경4605",
      "court": "청주지방법원",
      "appraised": 17000,
      "minBid": 12145,
      "failedCount": 0,
      "saleDate": "2026-08-05"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 15915
    },
    {
      "d": "2026-02",
      "p": 16260
    },
    {
      "d": "2026-05",
      "p": 16654
    },
    {
      "d": "2026-07",
      "p": 16947
    },
    {
      "d": "2026-08",
      "p": 17000
    }
  ],
  "agent": "음성공인중개사",
  "agentType": "공인중개사",
  "region2": "충청북도 음성군",
  "lat": 36.9372,
  "lng": 127.5893
},
{
  "id": "L098",
  "addr": "충주시 주덕읍 대곡리 단독주택 (대지 485㎡)",
  "region": "충북",
  "type": "단독주택",
  "area": 142,
  "floor": 2,
  "rooms": 4,
  "baths": 2,
  "park": true,
  "elev": false,
  "confirmed": "2026-08-13",
  "img": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=75",
  "deals": {
    "sale": {
      "price": 18500,
      "count": 2,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 18144,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 16638
    },
    {
      "d": "2026-02",
      "p": 16954
    },
    {
      "d": "2026-05",
      "p": 17201
    },
    {
      "d": "2026-07",
      "p": 17489
    },
    {
      "d": "2026-08",
      "p": 18500
    }
  ],
  "agent": "충주단독공인중개사",
  "agentType": "공인중개사",
  "region2": "충청북도 충주시",
  "lat": 36.9412,
  "lng": 127.9019
},
{
  "id": "L099",
  "addr": "진천군 진천읍 읍내리 전원주택",
  "region": "충북",
  "type": "전원주택",
  "area": 118,
  "floor": 1,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": false,
  "confirmed": "2026-08-12",
  "img": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=75",
  "deals": {
    "sale": {
      "price": 14000,
      "count": 7,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": {
      "caseNo": "2026타경1498",
      "court": "청주지방법원",
      "appraised": 14000,
      "minBid": 11023,
      "failedCount": 1,
      "saleDate": "2026-08-03"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 12437
    },
    {
      "d": "2026-02",
      "p": 12585
    },
    {
      "d": "2026-05",
      "p": 12896
    },
    {
      "d": "2026-07",
      "p": 13234
    },
    {
      "d": "2026-08",
      "p": 14000
    }
  ],
  "agent": "진천전원공인중개사",
  "agentType": "공인중개사",
  "region2": "충청북도 진천군",
  "lat": 36.8546,
  "lng": 127.4393
},
{
  "id": "L100",
  "addr": "괴산군 괴산읍 동부리 임야 (12,000㎡)",
  "region": "충북",
  "type": "임야",
  "area": 12000,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": false,
  "elev": false,
  "confirmed": "2026-08-11",
  "img": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=75",
  "deals": {
    "sale": {
      "price": 5500,
      "count": 7,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 5390,
      "verified": true
    },
    "auction": {
      "caseNo": "2026타경5861",
      "court": "청주지방법원",
      "appraised": 5500,
      "minBid": 4368,
      "failedCount": 1,
      "saleDate": "2026-12-10"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 4891
    },
    {
      "d": "2026-02",
      "p": 4989
    },
    {
      "d": "2026-05",
      "p": 5054
    },
    {
      "d": "2026-07",
      "p": 5153
    },
    {
      "d": "2026-08",
      "p": 5500
    }
  ],
  "agent": "괴산공인중개사",
  "agentType": "공인중개사",
  "region2": "충청북도 괴산군",
  "lat": 36.8135,
  "lng": 127.7866
},
{
  "id": "L101",
  "addr": "천안시 동남구 신방동 천안불당자이 402동",
  "region": "충남",
  "type": "아파트",
  "area": 84,
  "floor": 11,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 45000,
      "count": 2,
      "verified": true
    },
    "jeonse": {
      "price": 29000,
      "count": 5,
      "verified": false
    },
    "wolse": {
      "deposit": 2000,
      "rent": 95,
      "mgmt": 11,
      "count": 9,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 43854,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 39706
    },
    {
      "d": "2026-02",
      "p": 40840
    },
    {
      "d": "2026-05",
      "p": 41925
    },
    {
      "d": "2026-07",
      "p": 42568
    },
    {
      "d": "2026-08",
      "p": 45000
    }
  ],
  "agent": "천안신방공인중개사",
  "agentType": "공인중개사",
  "region2": "충청남도 천안시 동남구",
  "lat": 36.7902,
  "lng": 127.1488
},
{
  "id": "L102",
  "addr": "아산시 배방읍 공수리 아산탕정자이 302동",
  "region": "충남",
  "type": "아파트",
  "area": 84,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 39000,
      "count": 6,
      "verified": false
    },
    "jeonse": {
      "price": 25000,
      "count": 2,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 88,
      "mgmt": 11,
      "count": 2,
      "verified": false
    },
    "direct": {
      "dtype": "sale",
      "price": 37097,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 35075
    },
    {
      "d": "2026-02",
      "p": 35720
    },
    {
      "d": "2026-05",
      "p": 36320
    },
    {
      "d": "2026-07",
      "p": 36952
    },
    {
      "d": "2026-08",
      "p": 39000
    }
  ],
  "agent": "아산탕정공인중개사",
  "agentType": "공인중개사",
  "region2": "충청남도 아산시",
  "lat": 36.8012,
  "lng": 127.0489
},
{
  "id": "L103",
  "addr": "홍성군 홍북읍 충남도청혁신도시 두산위브 202동",
  "region": "충남",
  "type": "아파트",
  "area": 84,
  "floor": 9,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 25000,
      "count": 1,
      "verified": false
    },
    "jeonse": {
      "price": 16000,
      "count": 5,
      "verified": false
    },
    "wolse": {
      "deposit": 1500,
      "rent": 65,
      "mgmt": 6,
      "count": 5,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 22485
    },
    {
      "d": "2026-02",
      "p": 22940
    },
    {
      "d": "2026-05",
      "p": 23327
    },
    {
      "d": "2026-07",
      "p": 23612
    },
    {
      "d": "2026-08",
      "p": 25000
    }
  ],
  "agent": "홍성도청공인중개사",
  "agentType": "공인중개사",
  "region2": "충청남도 홍성군",
  "lat": 36.596,
  "lng": 126.6564
},
{
  "id": "L104",
  "addr": "서산시 동문동 서산sk뷰 301동",
  "region": "충남",
  "type": "아파트",
  "area": 74,
  "floor": 7,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 22000,
      "count": 1,
      "verified": true
    },
    "jeonse": {
      "price": 14000,
      "count": 5,
      "verified": false
    },
    "wolse": {
      "deposit": 1200,
      "rent": 60,
      "mgmt": 8,
      "count": 5,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 21572,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 19597
    },
    {
      "d": "2026-02",
      "p": 19987
    },
    {
      "d": "2026-05",
      "p": 20359
    },
    {
      "d": "2026-07",
      "p": 20615
    },
    {
      "d": "2026-08",
      "p": 22000
    }
  ],
  "agent": "서산공인중개사",
  "agentType": "공인중개사",
  "region2": "충청남도 서산시",
  "lat": 36.785,
  "lng": 126.4498
},
{
  "id": "L105",
  "addr": "당진시 합덕읍 성동리 전원주택",
  "region": "충남",
  "type": "전원주택",
  "area": 125,
  "floor": 1,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": false,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=75",
  "deals": {
    "sale": {
      "price": 13000,
      "count": 7,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 12517
    },
    {
      "d": "2026-02",
      "p": 12857
    },
    {
      "d": "2026-05",
      "p": 13133
    },
    {
      "d": "2026-07",
      "p": 13414
    },
    {
      "d": "2026-08",
      "p": 13000
    }
  ],
  "agent": "당진공인중개사",
  "agentType": "공인중개사",
  "region2": "충청남도 당진시",
  "lat": 36.8203,
  "lng": 126.5838
},
{
  "id": "L106",
  "addr": "보령시 대천동 대천해수욕장 인근 빌라",
  "region": "충남",
  "type": "빌라",
  "area": 56,
  "floor": 2,
  "rooms": 2,
  "baths": 1,
  "park": true,
  "elev": false,
  "confirmed": "2026-08-13",
  "img": "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=75",
  "deals": {
    "sale": {
      "price": 8500,
      "count": 1,
      "verified": true
    },
    "jeonse": {
      "price": 5500,
      "count": 2,
      "verified": true
    },
    "wolse": {
      "deposit": 500,
      "rent": 35,
      "mgmt": 0,
      "count": 8,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 8104,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 7666
    },
    {
      "d": "2026-02",
      "p": 7832
    },
    {
      "d": "2026-05",
      "p": 7992
    },
    {
      "d": "2026-07",
      "p": 8135
    },
    {
      "d": "2026-08",
      "p": 8500
    }
  ],
  "agent": "보령공인중개사",
  "agentType": "공인중개사",
  "region2": "충청남도 보령시",
  "lat": 36.3248,
  "lng": 126.5574
},
{
  "id": "L107",
  "addr": "부여군 부여읍 동남리 농지(답) 3,400㎡",
  "region": "충남",
  "type": "답",
  "area": 3400,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": false,
  "elev": false,
  "confirmed": "2026-08-12",
  "img": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=75",
  "deals": {
    "sale": {
      "price": 6800,
      "count": 2,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 6538
    },
    {
      "d": "2026-02",
      "p": 6649
    },
    {
      "d": "2026-05",
      "p": 6812
    },
    {
      "d": "2026-07",
      "p": 6991
    },
    {
      "d": "2026-08",
      "p": 6800
    }
  ],
  "agent": "부여공인중개사",
  "agentType": "공인중개사",
  "region2": "충청남도 부여군",
  "lat": 36.2754,
  "lng": 126.9098
},
{
  "id": "L108",
  "addr": "전주시 완산구 효자동 효자더샵 502동",
  "region": "전북",
  "type": "아파트",
  "area": 84,
  "floor": 15,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 38000,
      "count": 4,
      "verified": false
    },
    "jeonse": {
      "price": 24000,
      "count": 2,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 80,
      "mgmt": 15,
      "count": 2,
      "verified": false
    },
    "direct": {
      "dtype": "sale",
      "price": 36851,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 36038
    },
    {
      "d": "2026-02",
      "p": 36721
    },
    {
      "d": "2026-05",
      "p": 37766
    },
    {
      "d": "2026-07",
      "p": 38570
    },
    {
      "d": "2026-08",
      "p": 38000
    }
  ],
  "agent": "전주효자공인중개사",
  "agentType": "공인중개사",
  "region2": "전라북도 전주시 완산구",
  "lat": 35.7932,
  "lng": 127.1068
},
{
  "id": "L109",
  "addr": "전주시 덕진구 송천동 송천힐스테이트 301동",
  "region": "전북",
  "type": "아파트",
  "area": 84,
  "floor": 10,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 35000,
      "count": 8,
      "verified": false
    },
    "jeonse": {
      "price": 22000,
      "count": 4,
      "verified": true
    },
    "wolse": {
      "deposit": 1800,
      "rent": 75,
      "mgmt": 17,
      "count": 5,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 30918
    },
    {
      "d": "2026-02",
      "p": 31455
    },
    {
      "d": "2026-05",
      "p": 31950
    },
    {
      "d": "2026-07",
      "p": 32681
    },
    {
      "d": "2026-08",
      "p": 35000
    }
  ],
  "agent": "전주덕진공인중개사",
  "agentType": "공인중개사",
  "region2": "전라북도 전주시 덕진구",
  "lat": 35.8248,
  "lng": 127.0907
},
{
  "id": "L110",
  "addr": "군산시 조촌동 군산더샵 202동",
  "region": "전북",
  "type": "아파트",
  "area": 74,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 22000,
      "count": 8,
      "verified": true
    },
    "jeonse": {
      "price": 14000,
      "count": 6,
      "verified": true
    },
    "wolse": {
      "deposit": 1000,
      "rent": 58,
      "mgmt": 12,
      "count": 4,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 19564
    },
    {
      "d": "2026-02",
      "p": 20111
    },
    {
      "d": "2026-05",
      "p": 20450
    },
    {
      "d": "2026-07",
      "p": 20946
    },
    {
      "d": "2026-08",
      "p": 22000
    }
  ],
  "agent": "군산공인중개사",
  "agentType": "공인중개사",
  "region2": "전라북도 군산시",
  "lat": 35.9695,
  "lng": 126.7278
},
{
  "id": "L111",
  "addr": "익산시 영등동 익산역세권 자이 302동",
  "region": "전북",
  "type": "아파트",
  "area": 84,
  "floor": 9,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 27000,
      "count": 8,
      "verified": true
    },
    "jeonse": {
      "price": 17000,
      "count": 5,
      "verified": false
    },
    "wolse": {
      "deposit": 1500,
      "rent": 68,
      "mgmt": 10,
      "count": 5,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 26383,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 25293
    },
    {
      "d": "2026-02",
      "p": 25715
    },
    {
      "d": "2026-05",
      "p": 26141
    },
    {
      "d": "2026-07",
      "p": 26694
    },
    {
      "d": "2026-08",
      "p": 27000
    }
  ],
  "agent": "익산공인중개사",
  "agentType": "공인중개사",
  "region2": "전라북도 익산시",
  "lat": 35.9484,
  "lng": 126.9716
},
{
  "id": "L112",
  "addr": "완주군 이서면 이서리 농지(전) 2,100㎡",
  "region": "전북",
  "type": "전",
  "area": 2100,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": false,
  "elev": false,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=75",
  "deals": {
    "sale": {
      "price": 5200,
      "count": 2,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 5028
    },
    {
      "d": "2026-02",
      "p": 5148
    },
    {
      "d": "2026-05",
      "p": 5239
    },
    {
      "d": "2026-07",
      "p": 5353
    },
    {
      "d": "2026-08",
      "p": 5200
    }
  ],
  "agent": "완주공인중개사",
  "agentType": "공인중개사",
  "region2": "전라북도 완주군",
  "lat": 35.8791,
  "lng": 127.0184
},
{
  "id": "L113",
  "addr": "여수시 웅천동 여수경도해양관광단지 인근 힐스테이트 302동",
  "region": "전남",
  "type": "아파트",
  "area": 84,
  "floor": 12,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 39000,
      "count": 3,
      "verified": true
    },
    "jeonse": {
      "price": 25000,
      "count": 6,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 88,
      "mgmt": 13,
      "count": 2,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 34952
    },
    {
      "d": "2026-02",
      "p": 35451
    },
    {
      "d": "2026-05",
      "p": 36477
    },
    {
      "d": "2026-07",
      "p": 37196
    },
    {
      "d": "2026-08",
      "p": 39000
    }
  ],
  "agent": "여수웅천공인중개사",
  "agentType": "공인중개사",
  "region2": "전라남도 여수시",
  "lat": 34.7604,
  "lng": 127.6622
},
{
  "id": "L114",
  "addr": "순천시 연향동 순천테라스 자이 501동",
  "region": "전남",
  "type": "아파트",
  "area": 84,
  "floor": 15,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 43000,
      "count": 2,
      "verified": true
    },
    "jeonse": {
      "price": 27000,
      "count": 5,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 40914,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 40805
    },
    {
      "d": "2026-02",
      "p": 41319
    },
    {
      "d": "2026-05",
      "p": 42043
    },
    {
      "d": "2026-07",
      "p": 42599
    },
    {
      "d": "2026-08",
      "p": 43000
    }
  ],
  "agent": "순천자이공인중개사",
  "agentType": "공인중개사",
  "region2": "전라남도 순천시",
  "lat": 34.9486,
  "lng": 127.4877
},
{
  "id": "L115",
  "addr": "목포시 옥암동 목포현대아파트 203동",
  "region": "전남",
  "type": "아파트",
  "area": 74,
  "floor": 7,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 18000,
      "count": 1,
      "verified": true
    },
    "jeonse": {
      "price": 11000,
      "count": 6,
      "verified": true
    },
    "wolse": {
      "deposit": 1000,
      "rent": 52,
      "mgmt": 12,
      "count": 5,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 17268,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 17404
    },
    {
      "d": "2026-02",
      "p": 17851
    },
    {
      "d": "2026-05",
      "p": 18352
    },
    {
      "d": "2026-07",
      "p": 18606
    },
    {
      "d": "2026-08",
      "p": 18000
    }
  ],
  "agent": "목포공인중개사",
  "agentType": "공인중개사",
  "region2": "전라남도 목포시",
  "lat": 34.8128,
  "lng": 126.4067
},
{
  "id": "L116",
  "addr": "나주시 금천면 오강리 임야 8,800㎡",
  "region": "전남",
  "type": "임야",
  "area": 8800,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": false,
  "elev": false,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=75",
  "deals": {
    "sale": {
      "price": 3200,
      "count": 5,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 2862
    },
    {
      "d": "2026-02",
      "p": 2902
    },
    {
      "d": "2026-05",
      "p": 2966
    },
    {
      "d": "2026-07",
      "p": 3047
    },
    {
      "d": "2026-08",
      "p": 3200
    }
  ],
  "agent": "나주공인중개사",
  "agentType": "공인중개사",
  "region2": "전라남도 나주시",
  "lat": 35.0062,
  "lng": 126.6531
},
{
  "id": "L117",
  "addr": "해남군 해남읍 해리 전원주택",
  "region": "전남",
  "type": "전원주택",
  "area": 98,
  "floor": 1,
  "rooms": 3,
  "baths": 1,
  "park": true,
  "elev": false,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=75",
  "deals": {
    "sale": {
      "price": 9500,
      "count": 2,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 9128,
      "verified": true
    },
    "auction": {
      "caseNo": "2026타경7491",
      "court": "광주지방법원 순천지원",
      "appraised": 9500,
      "minBid": 6454,
      "failedCount": 1,
      "saleDate": "2026-08-08"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 9116
    },
    {
      "d": "2026-02",
      "p": 9376
    },
    {
      "d": "2026-05",
      "p": 9547
    },
    {
      "d": "2026-07",
      "p": 9718
    },
    {
      "d": "2026-08",
      "p": 9500
    }
  ],
  "agent": "해남공인중개사",
  "agentType": "공인중개사",
  "region2": "전라남도 해남군",
  "lat": 34.5736,
  "lng": 126.5992
},
{
  "id": "L118",
  "addr": "포항시 남구 대이동 포항자이 302동",
  "region": "경북",
  "type": "아파트",
  "area": 84,
  "floor": 10,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 39000,
      "count": 4,
      "verified": false
    },
    "jeonse": {
      "price": 25000,
      "count": 1,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 88,
      "mgmt": 15,
      "count": 6,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 36763
    },
    {
      "d": "2026-02",
      "p": 37232
    },
    {
      "d": "2026-05",
      "p": 38129
    },
    {
      "d": "2026-07",
      "p": 38852
    },
    {
      "d": "2026-08",
      "p": 39000
    }
  ],
  "agent": "포항자이공인중개사",
  "agentType": "공인중개사",
  "region2": "경상북도 포항시 남구",
  "lat": 36.0003,
  "lng": 129.3639
},
{
  "id": "L119",
  "addr": "구미시 인의동 구미디오빌 401동",
  "region": "경북",
  "type": "아파트",
  "area": 74,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 26000,
      "count": 3,
      "verified": true
    },
    "jeonse": {
      "price": 17000,
      "count": 6,
      "verified": true
    },
    "wolse": {
      "deposit": 1500,
      "rent": 65,
      "mgmt": 11,
      "count": 2,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 24375
    },
    {
      "d": "2026-02",
      "p": 24922
    },
    {
      "d": "2026-05",
      "p": 25202
    },
    {
      "d": "2026-07",
      "p": 25875
    },
    {
      "d": "2026-08",
      "p": 26000
    }
  ],
  "agent": "구미공인중개사",
  "agentType": "공인중개사",
  "region2": "경상북도 구미시",
  "lat": 36.121,
  "lng": 128.3445
},
{
  "id": "L120",
  "addr": "경주시 황성동 경주힐스테이트 202동",
  "region": "경북",
  "type": "아파트",
  "area": 84,
  "floor": 9,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 29000,
      "count": 3,
      "verified": true
    },
    "jeonse": {
      "price": 18000,
      "count": 1,
      "verified": true
    },
    "wolse": {
      "deposit": 1500,
      "rent": 70,
      "mgmt": 8,
      "count": 7,
      "verified": false
    },
    "direct": {
      "dtype": "sale",
      "price": 28157,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 28008
    },
    {
      "d": "2026-02",
      "p": 28592
    },
    {
      "d": "2026-05",
      "p": 29327
    },
    {
      "d": "2026-07",
      "p": 29918
    },
    {
      "d": "2026-08",
      "p": 29000
    }
  ],
  "agent": "경주공인중개사",
  "agentType": "공인중개사",
  "region2": "경상북도 경주시",
  "lat": 35.862,
  "lng": 129.2312
},
{
  "id": "L121",
  "addr": "안동시 옥동 안동자이 302동",
  "region": "경북",
  "type": "아파트",
  "area": 84,
  "floor": 7,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 24000,
      "count": 6,
      "verified": true
    },
    "jeonse": {
      "price": 15000,
      "count": 1,
      "verified": true
    },
    "wolse": {
      "deposit": 1200,
      "rent": 60,
      "mgmt": 6,
      "count": 6,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 22899,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 22754
    },
    {
      "d": "2026-02",
      "p": 23042
    },
    {
      "d": "2026-05",
      "p": 23434
    },
    {
      "d": "2026-07",
      "p": 23827
    },
    {
      "d": "2026-08",
      "p": 24000
    }
  ],
  "agent": "안동공인중개사",
  "agentType": "공인중개사",
  "region2": "경상북도 안동시",
  "lat": 36.5623,
  "lng": 128.7242
},
{
  "id": "L122",
  "addr": "영천시 금호면 오계리 농지(답) 4,200㎡",
  "region": "경북",
  "type": "답",
  "area": 4200,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": false,
  "elev": false,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=75",
  "deals": {
    "sale": {
      "price": 7500,
      "count": 3,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 6908
    },
    {
      "d": "2026-02",
      "p": 7017
    },
    {
      "d": "2026-05",
      "p": 7093
    },
    {
      "d": "2026-07",
      "p": 7192
    },
    {
      "d": "2026-08",
      "p": 7500
    }
  ],
  "agent": "영천공인중개사",
  "agentType": "공인중개사",
  "region2": "경상북도 영천시",
  "lat": 35.9712,
  "lng": 128.8942
},
{
  "id": "L123",
  "addr": "의성군 의성읍 후죽리 임야 25,000㎡",
  "region": "경북",
  "type": "임야",
  "area": 25000,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": false,
  "elev": false,
  "confirmed": "2026-08-13",
  "img": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=75",
  "deals": {
    "sale": {
      "price": 8000,
      "count": 5,
      "verified": false
    },
    "jeonse": null,
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 7691,
      "verified": true
    },
    "auction": {
      "caseNo": "2026타경2139",
      "court": "대구지방법원 포항지원",
      "appraised": 8000,
      "minBid": 5276,
      "failedCount": 2,
      "saleDate": "2026-10-09"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 7615
    },
    {
      "d": "2026-02",
      "p": 7757
    },
    {
      "d": "2026-05",
      "p": 7896
    },
    {
      "d": "2026-07",
      "p": 8044
    },
    {
      "d": "2026-08",
      "p": 8000
    }
  ],
  "agent": "의성공인중개사",
  "agentType": "공인중개사",
  "region2": "경상북도 의성군",
  "lat": 36.3519,
  "lng": 128.6911
},
{
  "id": "L124",
  "addr": "창원시 성산구 상남동 창원더샵 502동",
  "region": "경남",
  "type": "아파트",
  "area": 84,
  "floor": 14,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 55000,
      "count": 8,
      "verified": true
    },
    "jeonse": {
      "price": 35000,
      "count": 5,
      "verified": true
    },
    "wolse": {
      "deposit": 3000,
      "rent": 115,
      "mgmt": 6,
      "count": 7,
      "verified": false
    },
    "direct": {
      "dtype": "sale",
      "price": 54059,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 49989
    },
    {
      "d": "2026-02",
      "p": 50568
    },
    {
      "d": "2026-05",
      "p": 51742
    },
    {
      "d": "2026-07",
      "p": 52576
    },
    {
      "d": "2026-08",
      "p": 55000
    }
  ],
  "agent": "창원상남공인중개사",
  "agentType": "공인중개사",
  "region2": "경상남도 창원시 성산구",
  "lat": 35.2218,
  "lng": 128.6802
},
{
  "id": "L125",
  "addr": "창원시 의창구 용호동 창원자이 302동",
  "region": "경남",
  "type": "아파트",
  "area": 84,
  "floor": 9,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 48000,
      "count": 8,
      "verified": false
    },
    "jeonse": {
      "price": 31000,
      "count": 3,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 100,
      "mgmt": 11,
      "count": 5,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 45710,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 43994
    },
    {
      "d": "2026-02",
      "p": 44885
    },
    {
      "d": "2026-05",
      "p": 46007
    },
    {
      "d": "2026-07",
      "p": 46614
    },
    {
      "d": "2026-08",
      "p": 48000
    }
  ],
  "agent": "창원의창공인중개사",
  "agentType": "공인중개사",
  "region2": "경상남도 창원시 의창구",
  "lat": 35.2583,
  "lng": 128.6327
},
{
  "id": "L126",
  "addr": "진주시 충무공동 진주혁신자이 401동",
  "region": "경남",
  "type": "아파트",
  "area": 84,
  "floor": 11,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 32000,
      "count": 3,
      "verified": false
    },
    "jeonse": {
      "price": 21000,
      "count": 6,
      "verified": true
    },
    "wolse": {
      "deposit": 1500,
      "rent": 70,
      "mgmt": 11,
      "count": 1,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 31614,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 30357
    },
    {
      "d": "2026-02",
      "p": 31009
    },
    {
      "d": "2026-05",
      "p": 31647
    },
    {
      "d": "2026-07",
      "p": 32215
    },
    {
      "d": "2026-08",
      "p": 32000
    }
  ],
  "agent": "진주공인중개사",
  "agentType": "공인중개사",
  "region2": "경상남도 진주시",
  "lat": 35.1619,
  "lng": 128.1019
},
{
  "id": "L127",
  "addr": "김해시 내외동 김해센텀두산위브 302동",
  "region": "경남",
  "type": "아파트",
  "area": 84,
  "floor": 12,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=75",
  "deals": {
    "sale": {
      "price": 45000,
      "count": 3,
      "verified": true
    },
    "jeonse": {
      "price": 29000,
      "count": 4,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 95,
      "mgmt": 6,
      "count": 5,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 43136,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 42410
    },
    {
      "d": "2026-02",
      "p": 43681
    },
    {
      "d": "2026-05",
      "p": 44292
    },
    {
      "d": "2026-07",
      "p": 44855
    },
    {
      "d": "2026-08",
      "p": 45000
    }
  ],
  "agent": "김해공인중개사",
  "agentType": "공인중개사",
  "region2": "경상남도 김해시",
  "lat": 35.2288,
  "lng": 128.8825
},
{
  "id": "L128",
  "addr": "거제시 상문동 거제자이 202동",
  "region": "경남",
  "type": "아파트",
  "area": 84,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 36000,
      "count": 6,
      "verified": true
    },
    "jeonse": {
      "price": 23000,
      "count": 6,
      "verified": false
    },
    "wolse": {
      "deposit": 1500,
      "rent": 80,
      "mgmt": 13,
      "count": 5,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 35225,
      "verified": true
    },
    "auction": {
      "caseNo": "2026타경2088",
      "court": "창원지방법원",
      "appraised": 36000,
      "minBid": 27991,
      "failedCount": 1,
      "saleDate": "2026-12-08"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 34871
    },
    {
      "d": "2026-02",
      "p": 35772
    },
    {
      "d": "2026-05",
      "p": 36299
    },
    {
      "d": "2026-07",
      "p": 37020
    },
    {
      "d": "2026-08",
      "p": 36000
    }
  ],
  "agent": "거제공인중개사",
  "agentType": "공인중개사",
  "region2": "경상남도 거제시",
  "lat": 34.8804,
  "lng": 128.6214
},
{
  "id": "L129",
  "addr": "통영시 무전동 통영더샵 301동",
  "region": "경남",
  "type": "아파트",
  "area": 74,
  "floor": 9,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-13",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 27000,
      "count": 2,
      "verified": false
    },
    "jeonse": {
      "price": 17000,
      "count": 4,
      "verified": true
    },
    "wolse": {
      "deposit": 1200,
      "rent": 65,
      "mgmt": 16,
      "count": 8,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 26539,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 26122
    },
    {
      "d": "2026-02",
      "p": 26718
    },
    {
      "d": "2026-05",
      "p": 27225
    },
    {
      "d": "2026-07",
      "p": 27867
    },
    {
      "d": "2026-08",
      "p": 27000
    }
  ],
  "agent": "통영공인중개사",
  "agentType": "공인중개사",
  "region2": "경상남도 통영시",
  "lat": 34.8544,
  "lng": 128.4335
},
{
  "id": "L130",
  "addr": "하동군 하동읍 읍내리 전원주택",
  "region": "경남",
  "type": "전원주택",
  "area": 108,
  "floor": 1,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": false,
  "confirmed": "2026-08-12",
  "img": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=75",
  "deals": {
    "sale": {
      "price": 11000,
      "count": 7,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 10815,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 9981
    },
    {
      "d": "2026-02",
      "p": 10113
    },
    {
      "d": "2026-05",
      "p": 10403
    },
    {
      "d": "2026-07",
      "p": 10553
    },
    {
      "d": "2026-08",
      "p": 11000
    }
  ],
  "agent": "하동공인중개사",
  "agentType": "공인중개사",
  "region2": "경상남도 하동군",
  "lat": 35.0674,
  "lng": 127.7509
},
{
  "id": "L131",
  "addr": "춘천시 후평동 춘천sk뷰 302동",
  "region": "강원",
  "type": "아파트",
  "area": 84,
  "floor": 10,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 35000,
      "count": 5,
      "verified": false
    },
    "jeonse": {
      "price": 22000,
      "count": 5,
      "verified": true
    },
    "wolse": {
      "deposit": 1800,
      "rent": 75,
      "mgmt": 15,
      "count": 5,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 32629
    },
    {
      "d": "2026-02",
      "p": 33067
    },
    {
      "d": "2026-05",
      "p": 33810
    },
    {
      "d": "2026-07",
      "p": 34758
    },
    {
      "d": "2026-08",
      "p": 35000
    }
  ],
  "agent": "춘천sk뷰공인중개사",
  "agentType": "공인중개사",
  "region2": "강원도 춘천시",
  "lat": 37.8813,
  "lng": 127.7298
},
{
  "id": "L132",
  "addr": "원주시 반곡동 원주기업도시 힐스테이트 401동",
  "region": "강원",
  "type": "아파트",
  "area": 84,
  "floor": 12,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=75",
  "deals": {
    "sale": {
      "price": 32000,
      "count": 2,
      "verified": false
    },
    "jeonse": {
      "price": 20000,
      "count": 6,
      "verified": true
    },
    "wolse": {
      "deposit": 1500,
      "rent": 72,
      "mgmt": 9,
      "count": 4,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 29966
    },
    {
      "d": "2026-02",
      "p": 30439
    },
    {
      "d": "2026-05",
      "p": 31325
    },
    {
      "d": "2026-07",
      "p": 31940
    },
    {
      "d": "2026-08",
      "p": 32000
    }
  ],
  "agent": "원주기업도시공인중개사",
  "agentType": "공인중개사",
  "region2": "강원도 원주시",
  "lat": 37.3271,
  "lng": 127.9232
},
{
  "id": "L133",
  "addr": "강릉시 포남동 강릉자이 302동",
  "region": "강원",
  "type": "아파트",
  "area": 84,
  "floor": 9,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 31000,
      "count": 2,
      "verified": true
    },
    "jeonse": {
      "price": 19000,
      "count": 2,
      "verified": true
    },
    "wolse": {
      "deposit": 1500,
      "rent": 70,
      "mgmt": 12,
      "count": 8,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 29837,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 29328
    },
    {
      "d": "2026-02",
      "p": 30126
    },
    {
      "d": "2026-05",
      "p": 31014
    },
    {
      "d": "2026-07",
      "p": 31405
    },
    {
      "d": "2026-08",
      "p": 31000
    }
  ],
  "agent": "강릉자이공인중개사",
  "agentType": "공인중개사",
  "region2": "강원도 강릉시",
  "lat": 37.752,
  "lng": 128.8994
},
{
  "id": "L134",
  "addr": "속초시 교동 속초더샵 201동",
  "region": "강원",
  "type": "아파트",
  "area": 74,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 26000,
      "count": 8,
      "verified": false
    },
    "jeonse": {
      "price": 16000,
      "count": 4,
      "verified": false
    },
    "wolse": {
      "deposit": 1200,
      "rent": 65,
      "mgmt": 6,
      "count": 1,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 24904
    },
    {
      "d": "2026-02",
      "p": 25232
    },
    {
      "d": "2026-05",
      "p": 25649
    },
    {
      "d": "2026-07",
      "p": 26201
    },
    {
      "d": "2026-08",
      "p": 26000
    }
  ],
  "agent": "속초공인중개사",
  "agentType": "공인중개사",
  "region2": "강원도 속초시",
  "lat": 38.2068,
  "lng": 128.5946
},
{
  "id": "L135",
  "addr": "양양군 양양읍 군행리 농지(전) 1,850㎡",
  "region": "강원",
  "type": "전",
  "area": 1850,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": false,
  "elev": false,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=75",
  "deals": {
    "sale": {
      "price": 5800,
      "count": 8,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 5309
    },
    {
      "d": "2026-02",
      "p": 5410
    },
    {
      "d": "2026-05",
      "p": 5490
    },
    {
      "d": "2026-07",
      "p": 5608
    },
    {
      "d": "2026-08",
      "p": 5800
    }
  ],
  "agent": "양양공인중개사",
  "agentType": "공인중개사",
  "region2": "강원도 양양군",
  "lat": 38.0756,
  "lng": 128.6172
},
{
  "id": "L136",
  "addr": "평창군 대화면 상안미리 임야 35,000㎡",
  "region": "강원",
  "type": "임야",
  "area": 35000,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": false,
  "elev": false,
  "confirmed": "2026-08-13",
  "img": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=75",
  "deals": {
    "sale": {
      "price": 9500,
      "count": 1,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": {
      "caseNo": "2026타경6663",
      "court": "춘천지방법원",
      "appraised": 9500,
      "minBid": 7557,
      "failedCount": 1,
      "saleDate": "2026-10-02"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 8403
    },
    {
      "d": "2026-02",
      "p": 8581
    },
    {
      "d": "2026-05",
      "p": 8729
    },
    {
      "d": "2026-07",
      "p": 8866
    },
    {
      "d": "2026-08",
      "p": 9500
    }
  ],
  "agent": "평창공인중개사",
  "agentType": "공인중개사",
  "region2": "강원도 평창군",
  "lat": 37.5271,
  "lng": 128.5002
},
{
  "id": "L137",
  "addr": "인제군 서화면 서흥리 단독주택 (대지 620㎡)",
  "region": "강원",
  "type": "단독주택",
  "area": 112,
  "floor": 1,
  "rooms": 3,
  "baths": 1,
  "park": true,
  "elev": false,
  "confirmed": "2026-08-12",
  "img": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=75",
  "deals": {
    "sale": {
      "price": 7500,
      "count": 3,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 6828
    },
    {
      "d": "2026-02",
      "p": 7024
    },
    {
      "d": "2026-05",
      "p": 7200
    },
    {
      "d": "2026-07",
      "p": 7300
    },
    {
      "d": "2026-08",
      "p": 7500
    }
  ],
  "agent": "인제공인중개사",
  "agentType": "공인중개사",
  "region2": "강원도 인제군",
  "lat": 38.2103,
  "lng": 128.1771
},
{
  "id": "L138",
  "addr": "제주시 연동 제주그랜드아파트 201동",
  "region": "제주",
  "type": "아파트",
  "area": 84,
  "floor": 7,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=75",
  "deals": {
    "sale": {
      "price": 61000,
      "count": 3,
      "verified": true
    },
    "jeonse": {
      "price": 40000,
      "count": 4,
      "verified": true
    },
    "wolse": {
      "deposit": 3000,
      "rent": 120,
      "mgmt": 7,
      "count": 9,
      "verified": false
    },
    "direct": {
      "dtype": "sale",
      "price": 58727,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 57064
    },
    {
      "d": "2026-02",
      "p": 58596
    },
    {
      "d": "2026-05",
      "p": 59877
    },
    {
      "d": "2026-07",
      "p": 61083
    },
    {
      "d": "2026-08",
      "p": 61000
    }
  ],
  "agent": "제주연동공인중개사",
  "agentType": "공인중개사",
  "region2": "제주특별자치도 제주시",
  "lat": 33.4996,
  "lng": 126.5312
},
{
  "id": "L139",
  "addr": "제주시 노형동 제주첨단과학단지 힐스테이트 302동",
  "region": "제주",
  "type": "아파트",
  "area": 84,
  "floor": 12,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 68000,
      "count": 8,
      "verified": true
    },
    "jeonse": {
      "price": 44000,
      "count": 3,
      "verified": true
    },
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 65340
    },
    {
      "d": "2026-02",
      "p": 67133
    },
    {
      "d": "2026-05",
      "p": 68649
    },
    {
      "d": "2026-07",
      "p": 70155
    },
    {
      "d": "2026-08",
      "p": 68000
    }
  ],
  "agent": "노형힐스테이트공인중개사",
  "agentType": "공인중개사",
  "region2": "제주특별자치도 제주시",
  "lat": 33.4812,
  "lng": 126.474
},
{
  "id": "L140",
  "addr": "서귀포시 강정동 강정마을 전원주택",
  "region": "제주",
  "type": "전원주택",
  "area": 135,
  "floor": 1,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": false,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=75",
  "deals": {
    "sale": {
      "price": 38000,
      "count": 8,
      "verified": false
    },
    "jeonse": null,
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 37041,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 33945
    },
    {
      "d": "2026-02",
      "p": 34746
    },
    {
      "d": "2026-05",
      "p": 35115
    },
    {
      "d": "2026-07",
      "p": 36132
    },
    {
      "d": "2026-08",
      "p": 38000
    }
  ],
  "agent": "서귀포공인중개사",
  "agentType": "공인중개사",
  "region2": "제주특별자치도 서귀포시",
  "lat": 33.2763,
  "lng": 126.5059
},
{
  "id": "L141",
  "addr": "제주시 한림읍 귀덕리 농지(전) 2,400㎡ — 농업진흥구역 외",
  "region": "제주",
  "type": "전",
  "area": 2400,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": false,
  "elev": false,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=75",
  "deals": {
    "sale": {
      "price": 9600,
      "count": 3,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 8976
    },
    {
      "d": "2026-02",
      "p": 9150
    },
    {
      "d": "2026-05",
      "p": 9396
    },
    {
      "d": "2026-07",
      "p": 9626
    },
    {
      "d": "2026-08",
      "p": 9600
    }
  ],
  "agent": "한림공인중개사",
  "agentType": "공인중개사",
  "region2": "제주특별자치도 제주시",
  "lat": 33.4018,
  "lng": 126.262
},
{
  "id": "L142",
  "addr": "서귀포시 표선면 성읍리 단독주택",
  "region": "제주",
  "type": "단독주택",
  "area": 98,
  "floor": 1,
  "rooms": 3,
  "baths": 1,
  "park": true,
  "elev": false,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=75",
  "deals": {
    "sale": {
      "price": 24000,
      "count": 7,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": {
      "caseNo": "2026타경8032",
      "court": "제주지방법원",
      "appraised": 24000,
      "minBid": 17243,
      "failedCount": 1,
      "saleDate": "2026-10-20"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 21535
    },
    {
      "d": "2026-02",
      "p": 21856
    },
    {
      "d": "2026-05",
      "p": 22318
    },
    {
      "d": "2026-07",
      "p": 22641
    },
    {
      "d": "2026-08",
      "p": 24000
    }
  ],
  "agent": "서귀포표선공인중개사",
  "agentType": "공인중개사",
  "region2": "제주특별자치도 서귀포시",
  "lat": 33.3862,
  "lng": 126.7969
},
{
  "id": "L143",
  "addr": "세종특별자치시 소담동 소담마을4단지 자이 302동",
  "region": "세종",
  "type": "아파트",
  "area": 84,
  "floor": 10,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 53000,
      "count": 8,
      "verified": true
    },
    "jeonse": {
      "price": 32000,
      "count": 3,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 100,
      "mgmt": 17,
      "count": 5,
      "verified": true
    },
    "direct": null,
    "auction": {
      "caseNo": "2026타경789",
      "court": "대전지방법원",
      "appraised": 53000,
      "minBid": 38632,
      "failedCount": 1,
      "saleDate": "2026-09-10"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 48011
    },
    {
      "d": "2026-02",
      "p": 49176
    },
    {
      "d": "2026-05",
      "p": 50008
    },
    {
      "d": "2026-07",
      "p": 50950
    },
    {
      "d": "2026-08",
      "p": 53000
    }
  ],
  "agent": "세종소담공인중개사",
  "agentType": "공인중개사",
  "region2": "세종특별자치시",
  "lat": 36.5178,
  "lng": 127.2555
},
{
  "id": "L144",
  "addr": "세종특별자치시 반곡동 세종파라곤센트럴시티 402동",
  "region": "세종",
  "type": "아파트",
  "area": 84,
  "floor": 15,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 62000,
      "count": 5,
      "verified": false
    },
    "jeonse": {
      "price": 38000,
      "count": 5,
      "verified": true
    },
    "wolse": null,
    "direct": null,
    "auction": {
      "caseNo": "2026타경6871",
      "court": "대전지방법원",
      "appraised": 62000,
      "minBid": 43098,
      "failedCount": 0,
      "saleDate": "2026-08-04"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 56403
    },
    {
      "d": "2026-02",
      "p": 57499
    },
    {
      "d": "2026-05",
      "p": 58857
    },
    {
      "d": "2026-07",
      "p": 59607
    },
    {
      "d": "2026-08",
      "p": 62000
    }
  ],
  "agent": "세종반곡공인중개사",
  "agentType": "공인중개사",
  "region2": "세종특별자치시",
  "lat": 36.5089,
  "lng": 127.2621
},
{
  "id": "L145",
  "addr": "세종특별자치시 아름동 아름마을포스코더샵 201동",
  "region": "세종",
  "type": "아파트",
  "area": 99,
  "floor": 9,
  "rooms": 4,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 75000,
      "count": 8,
      "verified": true
    },
    "jeonse": {
      "price": 46000,
      "count": 2,
      "verified": true
    },
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 71188
    },
    {
      "d": "2026-02",
      "p": 72828
    },
    {
      "d": "2026-05",
      "p": 73894
    },
    {
      "d": "2026-07",
      "p": 75724
    },
    {
      "d": "2026-08",
      "p": 75000
    }
  ],
  "agent": "세종아름공인중개사",
  "agentType": "공인중개사",
  "region2": "세종특별자치시",
  "lat": 36.5221,
  "lng": 127.2803
},
{
  "id": "L146",
  "addr": "세종특별자치시 고운동 고운2동 주공 복합단지 501동",
  "region": "세종",
  "type": "아파트",
  "area": 59,
  "floor": 5,
  "rooms": 2,
  "baths": 1,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 38000,
      "count": 3,
      "verified": true
    },
    "jeonse": {
      "price": 23000,
      "count": 1,
      "verified": true
    },
    "wolse": {
      "deposit": 1800,
      "rent": 80,
      "mgmt": 11,
      "count": 8,
      "verified": false
    },
    "direct": {
      "dtype": "sale",
      "price": 37425,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 33568
    },
    {
      "d": "2026-02",
      "p": 34104
    },
    {
      "d": "2026-05",
      "p": 34856
    },
    {
      "d": "2026-07",
      "p": 35851
    },
    {
      "d": "2026-08",
      "p": 38000
    }
  ],
  "agent": "세종고운공인중개사",
  "agentType": "공인중개사",
  "region2": "세종특별자치시",
  "lat": 36.5382,
  "lng": 127.2662
},
{
  "id": "L147",
  "addr": "세종특별자치시 보람동 세종힐스테이트리버파크 303동",
  "region": "세종",
  "type": "아파트",
  "area": 84,
  "floor": 12,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 57000,
      "count": 3,
      "verified": true
    },
    "jeonse": {
      "price": 35000,
      "count": 4,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 54903,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 53485
    },
    {
      "d": "2026-02",
      "p": 54788
    },
    {
      "d": "2026-05",
      "p": 55351
    },
    {
      "d": "2026-07",
      "p": 56277
    },
    {
      "d": "2026-08",
      "p": 57000
    }
  ],
  "agent": "세종보람공인중개사",
  "agentType": "공인중개사",
  "region2": "세종특별자치시",
  "lat": 36.5014,
  "lng": 127.2739
},
{
  "id": "L148",
  "addr": "서울시 강남구 역삼동 선릉역 오피스텔 1501호",
  "region": "서울",
  "type": "오피스텔",
  "area": 33,
  "floor": 15,
  "rooms": 1,
  "baths": 1,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=75",
  "deals": {
    "sale": {
      "price": 72000,
      "count": 7,
      "verified": true
    },
    "jeonse": {
      "price": 40000,
      "count": 5,
      "verified": true
    },
    "wolse": {
      "deposit": 3000,
      "rent": 160,
      "mgmt": 11,
      "count": 2,
      "verified": false
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 65049
    },
    {
      "d": "2026-02",
      "p": 66005
    },
    {
      "d": "2026-05",
      "p": 67660
    },
    {
      "d": "2026-07",
      "p": 69627
    },
    {
      "d": "2026-08",
      "p": 72000
    }
  ],
  "agent": "역삼선릉공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 강남구",
  "lat": 37.504,
  "lng": 127.0485
},
{
  "id": "L149",
  "addr": "서울시 마포구 홍대입구역 상가임대 1층",
  "region": "서울",
  "type": "상가임대",
  "area": 85,
  "floor": 1,
  "rooms": 0,
  "baths": 0,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=75",
  "deals": {
    "sale": null,
    "jeonse": null,
    "wolse": {
      "deposit": 3000,
      "rent": 350,
      "mgmt": 0,
      "count": 6,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [],
  "agent": "홍대상가공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 마포구",
  "lat": 37.5574,
  "lng": 126.9245
},
{
  "id": "L150",
  "addr": "경기도 성남시 분당구 수내동 정자역 상가",
  "region": "경기",
  "type": "상가임대",
  "area": 62,
  "floor": 1,
  "rooms": 0,
  "baths": 0,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=75",
  "deals": {
    "sale": null,
    "jeonse": null,
    "wolse": {
      "deposit": 2000,
      "rent": 280,
      "mgmt": 0,
      "count": 5,
      "verified": false
    },
    "direct": null,
    "auction": null
  },
  "realprice": [],
  "agent": "분당정자역상가공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 성남시 분당구",
  "lat": 37.358,
  "lng": 127.1084
},
{
  "id": "L151",
  "addr": "부산시 해운대구 우동 마린시티 상가임대",
  "region": "부산",
  "type": "상가임대",
  "area": 74,
  "floor": 1,
  "rooms": 0,
  "baths": 0,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=75",
  "deals": {
    "sale": null,
    "jeonse": null,
    "wolse": {
      "deposit": 2000,
      "rent": 220,
      "mgmt": 0,
      "count": 5,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [],
  "agent": "해운대마린시티공인중개사",
  "agentType": "공인중개사",
  "region2": "부산광역시 해운대구",
  "lat": 35.1605,
  "lng": 129.1604
},
{
  "id": "L152",
  "addr": "대전시 서구 둔산동 갤러리아타임월드 인근 상가",
  "region": "대전",
  "type": "상가임대",
  "area": 52,
  "floor": 1,
  "rooms": 0,
  "baths": 0,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=75",
  "deals": {
    "sale": null,
    "jeonse": null,
    "wolse": {
      "deposit": 1000,
      "rent": 150,
      "mgmt": 0,
      "count": 3,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [],
  "agent": "둔산상가공인중개사",
  "agentType": "공인중개사",
  "region2": "대전광역시 서구",
  "lat": 36.3529,
  "lng": 127.3791
},
{
  "id": "L153",
  "addr": "인천시 연수구 송도동 송도 트리플스트리트 상가",
  "region": "인천",
  "type": "상가임대",
  "area": 48,
  "floor": 1,
  "rooms": 0,
  "baths": 0,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-13",
  "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=75",
  "deals": {
    "sale": null,
    "jeonse": null,
    "wolse": {
      "deposit": 1500,
      "rent": 180,
      "mgmt": 0,
      "count": 9,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [],
  "agent": "송도상가공인중개사",
  "agentType": "공인중개사",
  "region2": "인천광역시 연수구",
  "lat": 37.3901,
  "lng": 126.6481
},
{
  "id": "L154",
  "addr": "청주시 흥덕구 오송읍 봉산리 오송역센트럴자이 101동",
  "region": "오송",
  "type": "아파트",
  "area": 84,
  "floor": 7,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 46000,
      "count": 2,
      "verified": true
    },
    "jeonse": {
      "price": 30000,
      "count": 5,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 100,
      "mgmt": 6,
      "count": 2,
      "verified": false
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 41100
    },
    {
      "d": "2026-02",
      "p": 41780
    },
    {
      "d": "2026-05",
      "p": 42632
    },
    {
      "d": "2026-07",
      "p": 43157
    },
    {
      "d": "2026-08",
      "p": 46000
    }
  ],
  "agent": "오송센트럴자이공인중개사",
  "agentType": "공인중개사",
  "region2": "충북 청주시 흥덕구",
  "lat": 36.6195,
  "lng": 127.2975
},
{
  "id": "L155",
  "addr": "청주시 흥덕구 오송읍 호탄리 오송역서희스타힐스 302동",
  "region": "오송",
  "type": "아파트",
  "area": 74,
  "floor": 5,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 38000,
      "count": 8,
      "verified": true
    },
    "jeonse": {
      "price": 25000,
      "count": 4,
      "verified": false
    },
    "wolse": {
      "deposit": 1800,
      "rent": 88,
      "mgmt": 11,
      "count": 8,
      "verified": true
    },
    "direct": {
      "dtype": "jeonse",
      "price": 24058,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 34310
    },
    {
      "d": "2026-02",
      "p": 34655
    },
    {
      "d": "2026-05",
      "p": 35152
    },
    {
      "d": "2026-07",
      "p": 35554
    },
    {
      "d": "2026-08",
      "p": 38000
    }
  ],
  "agent": "오송서희공인중개사",
  "agentType": "공인중개사",
  "region2": "충북 청주시 흥덕구",
  "lat": 36.6172,
  "lng": 127.2953
},
{
  "id": "L156",
  "addr": "청주시 흥덕구 오송읍 봉산리 오송역반도유보라 201동",
  "region": "오송",
  "type": "아파트",
  "area": 59,
  "floor": 9,
  "rooms": 2,
  "baths": 1,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 33000,
      "count": 2,
      "verified": true
    },
    "jeonse": {
      "price": 22000,
      "count": 4,
      "verified": false
    },
    "wolse": {
      "deposit": 1500,
      "rent": 75,
      "mgmt": 11,
      "count": 3,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 32641,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 30288
    },
    {
      "d": "2026-02",
      "p": 31192
    },
    {
      "d": "2026-05",
      "p": 31742
    },
    {
      "d": "2026-07",
      "p": 32611
    },
    {
      "d": "2026-08",
      "p": 33000
    }
  ],
  "agent": "오송반도유보라공인중개사",
  "agentType": "공인중개사",
  "region2": "충북 청주시 흥덕구",
  "lat": 36.6188,
  "lng": 127.2967
},
{
  "id": "L157",
  "addr": "청주시 청원구 오창읍 양청리 오창과학단지 자이 401동",
  "region": "오창",
  "type": "아파트",
  "area": 84,
  "floor": 12,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 35000,
      "count": 6,
      "verified": false
    },
    "jeonse": {
      "price": 23000,
      "count": 5,
      "verified": true
    },
    "wolse": {
      "deposit": 1800,
      "rent": 82,
      "mgmt": 7,
      "count": 4,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 34619,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 33065
    },
    {
      "d": "2026-02",
      "p": 33676
    },
    {
      "d": "2026-05",
      "p": 34268
    },
    {
      "d": "2026-07",
      "p": 34768
    },
    {
      "d": "2026-08",
      "p": 35000
    }
  ],
  "agent": "오창자이공인중개사",
  "agentType": "공인중개사",
  "region2": "충북 청주시 청원구",
  "lat": 36.7148,
  "lng": 127.4448
},
{
  "id": "L158",
  "addr": "청주시 청원구 오창읍 창리 오창 힐스테이트 202동",
  "region": "오창",
  "type": "아파트",
  "area": 74,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 30000,
      "count": 1,
      "verified": true
    },
    "jeonse": {
      "price": 19500,
      "count": 4,
      "verified": true
    },
    "wolse": {
      "deposit": 1500,
      "rent": 72,
      "mgmt": 5,
      "count": 4,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 28298
    },
    {
      "d": "2026-02",
      "p": 28608
    },
    {
      "d": "2026-05",
      "p": 29317
    },
    {
      "d": "2026-07",
      "p": 29846
    },
    {
      "d": "2026-08",
      "p": 30000
    }
  ],
  "agent": "오창힐스테이트공인중개사",
  "agentType": "공인중개사",
  "region2": "충북 청주시 청원구",
  "lat": 36.7165,
  "lng": 127.4421
},
{
  "id": "L159",
  "addr": "청주시 흥덕구 오송읍 공북리 오송 롯데캐슬 에듀포레 501동",
  "region": "오송",
  "type": "아파트",
  "area": 84,
  "floor": 15,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-13",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 49000,
      "count": 5,
      "verified": true
    },
    "jeonse": {
      "price": 32000,
      "count": 6,
      "verified": true
    },
    "wolse": {
      "deposit": 2000,
      "rent": 105,
      "mgmt": 14,
      "count": 6,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 48481,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 44943
    },
    {
      "d": "2026-02",
      "p": 45639
    },
    {
      "d": "2026-05",
      "p": 46603
    },
    {
      "d": "2026-07",
      "p": 47620
    },
    {
      "d": "2026-08",
      "p": 49000
    }
  ],
  "agent": "오송롯데캐슬공인중개사",
  "agentType": "공인중개사",
  "region2": "충북 청주시 흥덕구",
  "lat": 36.6208,
  "lng": 127.2942
},
{
  "id": "L160",
  "addr": "청주시 흥덕구 오송읍 오송읍사무소 오피스텔 1201호",
  "region": "오송",
  "type": "오피스텔",
  "area": 42,
  "floor": 12,
  "rooms": 1,
  "baths": 1,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-12",
  "img": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=75",
  "deals": {
    "sale": {
      "price": 18000,
      "count": 1,
      "verified": true
    },
    "jeonse": {
      "price": 12000,
      "count": 6,
      "verified": true
    },
    "wolse": {
      "deposit": 1000,
      "rent": 55,
      "mgmt": 17,
      "count": 9,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 17062
    },
    {
      "d": "2026-02",
      "p": 17394
    },
    {
      "d": "2026-05",
      "p": 17863
    },
    {
      "d": "2026-07",
      "p": 18149
    },
    {
      "d": "2026-08",
      "p": 18000
    }
  ],
  "agent": "오송오피스텔공인중개사",
  "agentType": "공인중개사",
  "region2": "충북 청주시 흥덕구",
  "lat": 36.6179,
  "lng": 127.2988
},
{
  "id": "L161",
  "addr": "청주시 청원구 오창읍 비중리 오창 단독주택 (대지 350㎡)",
  "region": "오창",
  "type": "단독주택",
  "area": 128,
  "floor": 2,
  "rooms": 4,
  "baths": 2,
  "park": true,
  "elev": false,
  "confirmed": "2026-08-11",
  "img": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=75",
  "deals": {
    "sale": {
      "price": 21000,
      "count": 7,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 18864
    },
    {
      "d": "2026-02",
      "p": 19296
    },
    {
      "d": "2026-05",
      "p": 19844
    },
    {
      "d": "2026-07",
      "p": 20378
    },
    {
      "d": "2026-08",
      "p": 21000
    }
  ],
  "agent": "오창단독공인중개사",
  "agentType": "공인중개사",
  "region2": "충북 청주시 청원구",
  "lat": 36.7183,
  "lng": 127.4412
},
{
  "id": "L162",
  "addr": "수원시 권선구 권선동 권선자이 201동",
  "region": "경기",
  "type": "아파트",
  "area": 84,
  "floor": 9,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 72000,
      "count": 5,
      "verified": true
    },
    "jeonse": {
      "price": 48000,
      "count": 5,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 68941,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 68053
    },
    {
      "d": "2026-02",
      "p": 69494
    },
    {
      "d": "2026-05",
      "p": 70855
    },
    {
      "d": "2026-07",
      "p": 72795
    },
    {
      "d": "2026-08",
      "p": 72000
    }
  ],
  "agent": "수원권선공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 수원시 권선구",
  "lat": 37.2491,
  "lng": 126.9857
},
{
  "id": "L163",
  "addr": "창원시 마산합포구 산호동 마산 힐스테이트 302동",
  "region": "경남",
  "type": "아파트",
  "area": 84,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=75",
  "deals": {
    "sale": {
      "price": 29000,
      "count": 4,
      "verified": true
    },
    "jeonse": {
      "price": 19000,
      "count": 1,
      "verified": true
    },
    "wolse": {
      "deposit": 1500,
      "rent": 68,
      "mgmt": 17,
      "count": 8,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 28366,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 26144
    },
    {
      "d": "2026-02",
      "p": 26573
    },
    {
      "d": "2026-05",
      "p": 26989
    },
    {
      "d": "2026-07",
      "p": 27510
    },
    {
      "d": "2026-08",
      "p": 29000
    }
  ],
  "agent": "마산공인중개사",
  "agentType": "공인중개사",
  "region2": "경상남도 창원시 마산합포구",
  "lat": 35.2013,
  "lng": 128.5741
},
{
  "id": "L164",
  "addr": "청주시 상당구 용암동 청주 용암 자이 201동",
  "region": "청주 상당",
  "type": "아파트",
  "area": 84,
  "floor": 11,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 34000,
      "count": 8,
      "verified": false
    },
    "jeonse": {
      "price": 22000,
      "count": 6,
      "verified": true
    },
    "wolse": {
      "deposit": 1800,
      "rent": 80,
      "mgmt": 18,
      "count": 6,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 30597
    },
    {
      "d": "2026-02",
      "p": 30992
    },
    {
      "d": "2026-05",
      "p": 31463
    },
    {
      "d": "2026-07",
      "p": 32365
    },
    {
      "d": "2026-08",
      "p": 34000
    }
  ],
  "agent": "용암자이공인중개사",
  "agentType": "공인중개사",
  "region2": "충북 청주시 상당구",
  "lat": 36.6441,
  "lng": 127.5023
},
{
  "id": "L165",
  "addr": "세종특별자치시 전동면 심중리 농지(답) 5,600㎡",
  "region": "세종",
  "type": "답",
  "area": 5600,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": false,
  "elev": false,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=75",
  "deals": {
    "sale": {
      "price": 11000,
      "count": 6,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 10225
    },
    {
      "d": "2026-02",
      "p": 10520
    },
    {
      "d": "2026-05",
      "p": 10696
    },
    {
      "d": "2026-07",
      "p": 10966
    },
    {
      "d": "2026-08",
      "p": 11000
    }
  ],
  "agent": "세종전동공인중개사",
  "agentType": "공인중개사",
  "region2": "세종특별자치시",
  "lat": 36.4813,
  "lng": 127.1682
},
{
  "id": "L166",
  "addr": "전주시 완산구 효자동 전주서부신시가지 빌라",
  "region": "전북",
  "type": "빌라",
  "area": 60,
  "floor": 3,
  "rooms": 3,
  "baths": 1,
  "park": true,
  "elev": false,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=75",
  "deals": {
    "sale": {
      "price": 12000,
      "count": 3,
      "verified": true
    },
    "jeonse": {
      "price": 8000,
      "count": 3,
      "verified": false
    },
    "wolse": {
      "deposit": 800,
      "rent": 40,
      "mgmt": 0,
      "count": 9,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 11660,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 10623
    },
    {
      "d": "2026-02",
      "p": 10736
    },
    {
      "d": "2026-05",
      "p": 11025
    },
    {
      "d": "2026-07",
      "p": 11343
    },
    {
      "d": "2026-08",
      "p": 12000
    }
  ],
  "agent": "전주서부공인중개사",
  "agentType": "공인중개사",
  "region2": "전라북도 전주시 완산구",
  "lat": 35.7891,
  "lng": 127.1028
},
{
  "id": "L167",
  "addr": "광주시 광산구 산정동 산정마을5단지 301동",
  "region": "광주",
  "type": "아파트",
  "area": 84,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-13",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 38000,
      "count": 4,
      "verified": false
    },
    "jeonse": {
      "price": 24000,
      "count": 2,
      "verified": false
    },
    "wolse": {
      "deposit": 2000,
      "rent": 85,
      "mgmt": 13,
      "count": 8,
      "verified": true
    },
    "direct": {
      "dtype": "sale",
      "price": 37113,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 35092
    },
    {
      "d": "2026-02",
      "p": 35785
    },
    {
      "d": "2026-05",
      "p": 36147
    },
    {
      "d": "2026-07",
      "p": 36907
    },
    {
      "d": "2026-08",
      "p": 38000
    }
  ],
  "agent": "광주광산공인중개사",
  "agentType": "공인중개사",
  "region2": "광주광역시 광산구",
  "lat": 35.2148,
  "lng": 126.7974
},
{
  "id": "L168",
  "addr": "고양시 덕양구 행신동 행신두산위브 502동",
  "region": "경기",
  "type": "아파트",
  "area": 84,
  "floor": 15,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-12",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 72000,
      "count": 1,
      "verified": true
    },
    "jeonse": {
      "price": 47000,
      "count": 6,
      "verified": true
    },
    "wolse": {
      "deposit": 3000,
      "rent": 130,
      "mgmt": 17,
      "count": 3,
      "verified": false
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 66771
    },
    {
      "d": "2026-02",
      "p": 68527
    },
    {
      "d": "2026-05",
      "p": 69578
    },
    {
      "d": "2026-07",
      "p": 70826
    },
    {
      "d": "2026-08",
      "p": 72000
    }
  ],
  "agent": "고양행신공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 고양시 덕양구",
  "lat": 37.6297,
  "lng": 126.8366
},
{
  "id": "L169",
  "addr": "경기도 이천시 마장면 오천리 대지 980㎡",
  "region": "경기",
  "type": "토지",
  "area": 980,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": true,
  "elev": false,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=75",
  "deals": {
    "sale": {
      "price": 29000,
      "count": 5,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 28308,
      "verified": true
    },
    "auction": {
      "caseNo": "2026타경6279",
      "court": "수원지방법원",
      "appraised": 29000,
      "minBid": 23255,
      "failedCount": 0,
      "saleDate": "2026-11-13"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 26962
    },
    {
      "d": "2026-02",
      "p": 27261
    },
    {
      "d": "2026-05",
      "p": 27538
    },
    {
      "d": "2026-07",
      "p": 27907
    },
    {
      "d": "2026-08",
      "p": 29000
    }
  ],
  "agent": "이천공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 이천시",
  "lat": 37.2683,
  "lng": 127.4851
},
{
  "id": "L170",
  "addr": "충북 보은군 마로면 적음리 임야 18,500㎡",
  "region": "충북",
  "type": "임야",
  "area": 18500,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": false,
  "elev": false,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=75",
  "deals": {
    "sale": {
      "price": 4800,
      "count": 1,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 4692,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 4341
    },
    {
      "d": "2026-02",
      "p": 4464
    },
    {
      "d": "2026-05",
      "p": 4569
    },
    {
      "d": "2026-07",
      "p": 4640
    },
    {
      "d": "2026-08",
      "p": 4800
    }
  ],
  "agent": "보은공인중개사",
  "agentType": "공인중개사",
  "region2": "충청북도 보은군",
  "lat": 36.4918,
  "lng": 127.7042
},
{
  "id": "L171",
  "addr": "경남 합천군 대병면 성리 농지(전) 3,200㎡",
  "region": "경남",
  "type": "전",
  "area": 3200,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": false,
  "elev": false,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=75",
  "deals": {
    "sale": {
      "price": 4500,
      "count": 1,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 4248
    },
    {
      "d": "2026-02",
      "p": 4324
    },
    {
      "d": "2026-05",
      "p": 4373
    },
    {
      "d": "2026-07",
      "p": 4430
    },
    {
      "d": "2026-08",
      "p": 4500
    }
  ],
  "agent": "합천공인중개사",
  "agentType": "공인중개사",
  "region2": "경상남도 합천군",
  "lat": 35.712,
  "lng": 128.1656
},
{
  "id": "L172",
  "addr": "전남 담양군 담양읍 천변리 농지(답) 2,800㎡",
  "region": "전남",
  "type": "답",
  "area": 2800,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": false,
  "elev": false,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=75",
  "deals": {
    "sale": {
      "price": 5600,
      "count": 7,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": {
      "caseNo": "2026타경1700",
      "court": "광주지방법원 순천지원",
      "appraised": 5600,
      "minBid": 4451,
      "failedCount": 2,
      "saleDate": "2026-10-02"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 5148
    },
    {
      "d": "2026-02",
      "p": 5285
    },
    {
      "d": "2026-05",
      "p": 5373
    },
    {
      "d": "2026-07",
      "p": 5509
    },
    {
      "d": "2026-08",
      "p": 5600
    }
  ],
  "agent": "담양공인중개사",
  "agentType": "공인중개사",
  "region2": "전라남도 담양군",
  "lat": 35.3213,
  "lng": 126.9888
},
{
  "id": "L173",
  "addr": "충남 서천군 기산면 화산리 임야 22,000㎡",
  "region": "충남",
  "type": "임야",
  "area": 22000,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": false,
  "elev": false,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=75",
  "deals": {
    "sale": {
      "price": 3800,
      "count": 5,
      "verified": true
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 3533
    },
    {
      "d": "2026-02",
      "p": 3594
    },
    {
      "d": "2026-05",
      "p": 3643
    },
    {
      "d": "2026-07",
      "p": 3722
    },
    {
      "d": "2026-08",
      "p": 3800
    }
  ],
  "agent": "서천공인중개사",
  "agentType": "공인중개사",
  "region2": "충청남도 서천군",
  "lat": 36.0764,
  "lng": 126.6804
},
{
  "id": "L174",
  "addr": "강원 인제군 북면 용대리 대지 550㎡ (숙박업 허가 가능)",
  "region": "강원",
  "type": "토지",
  "area": 550,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": true,
  "elev": false,
  "confirmed": "2026-08-13",
  "img": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=75",
  "deals": {
    "sale": {
      "price": 8500,
      "count": 2,
      "verified": false
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 7964
    },
    {
      "d": "2026-02",
      "p": 8161
    },
    {
      "d": "2026-05",
      "p": 8294
    },
    {
      "d": "2026-07",
      "p": 8394
    },
    {
      "d": "2026-08",
      "p": 8500
    }
  ],
  "agent": "인제대지공인중개사",
  "agentType": "공인중개사",
  "region2": "강원도 인제군",
  "lat": 38.2512,
  "lng": 128.1912
},
{
  "id": "L175",
  "addr": "경북 울릉군 울릉읍 저동리 대지 320㎡",
  "region": "경북",
  "type": "토지",
  "area": 320,
  "floor": 0,
  "rooms": 0,
  "baths": 0,
  "park": true,
  "elev": false,
  "confirmed": "2026-08-12",
  "img": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=75",
  "deals": {
    "sale": {
      "price": 12000,
      "count": 2,
      "verified": false
    },
    "jeonse": null,
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 11159
    },
    {
      "d": "2026-02",
      "p": 11361
    },
    {
      "d": "2026-05",
      "p": 11480
    },
    {
      "d": "2026-07",
      "p": 11676
    },
    {
      "d": "2026-08",
      "p": 12000
    }
  ],
  "agent": "울릉공인중개사",
  "agentType": "공인중개사",
  "region2": "경상북도 울릉군",
  "lat": 37.4785,
  "lng": 130.9073
},
{
  "id": "L176",
  "addr": "서울시 강남구 개포동 래미안블레스티지 1102동",
  "region": "서울",
  "type": "아파트",
  "area": 84,
  "floor": 11,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-18",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 245000,
      "count": 1,
      "verified": true
    },
    "jeonse": {
      "price": 150000,
      "count": 4,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 238233,
      "verified": true
    },
    "auction": {
      "caseNo": "2026타경6337",
      "court": "서울남부지방법원",
      "appraised": 245000,
      "minBid": 171144,
      "failedCount": 2,
      "saleDate": "2026-09-22"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 219337
    },
    {
      "d": "2026-02",
      "p": 222710
    },
    {
      "d": "2026-05",
      "p": 226132
    },
    {
      "d": "2026-07",
      "p": 229053
    },
    {
      "d": "2026-08",
      "p": 245000
    }
  ],
  "agent": "개포래미안공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 강남구",
  "lat": 37.4787,
  "lng": 127.0607
},
{
  "id": "L177",
  "addr": "경기도 성남시 분당구 백현동 판교알파리움 302동",
  "region": "경기",
  "type": "아파트",
  "area": 112,
  "floor": 14,
  "rooms": 4,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-17",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 210000,
      "count": 2,
      "verified": true
    },
    "jeonse": {
      "price": 120000,
      "count": 2,
      "verified": true
    },
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 187360
    },
    {
      "d": "2026-02",
      "p": 189258
    },
    {
      "d": "2026-05",
      "p": 192648
    },
    {
      "d": "2026-07",
      "p": 197817
    },
    {
      "d": "2026-08",
      "p": 210000
    }
  ],
  "agent": "판교알파리움공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 성남시 분당구",
  "lat": 37.3907,
  "lng": 127.1074
},
{
  "id": "L178",
  "addr": "서울시 서초구 잠원동 한신더휴 리버파크 403동",
  "region": "서울",
  "type": "아파트",
  "area": 84,
  "floor": 14,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-16",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 185000,
      "count": 7,
      "verified": true
    },
    "jeonse": {
      "price": 108000,
      "count": 6,
      "verified": true
    },
    "wolse": null,
    "direct": null,
    "auction": {
      "caseNo": "2026타경5328",
      "court": "서울남부지방법원",
      "appraised": 185000,
      "minBid": 127681,
      "failedCount": 1,
      "saleDate": "2026-09-13"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 167652
    },
    {
      "d": "2026-02",
      "p": 171658
    },
    {
      "d": "2026-05",
      "p": 175060
    },
    {
      "d": "2026-07",
      "p": 178826
    },
    {
      "d": "2026-08",
      "p": 185000
    }
  ],
  "agent": "잠원공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 서초구",
  "lat": 37.5121,
  "lng": 126.9911
},
{
  "id": "L179",
  "addr": "경기도 과천시 별양동 래미안에코팰리스 501동",
  "region": "경기",
  "type": "아파트",
  "area": 84,
  "floor": 12,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-15",
  "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75",
  "deals": {
    "sale": {
      "price": 162000,
      "count": 2,
      "verified": true
    },
    "jeonse": {
      "price": 95000,
      "count": 2,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "jeonse",
      "price": 92340,
      "verified": true
    },
    "auction": {
      "caseNo": "2026타경4873",
      "court": "수원지방법원",
      "appraised": 162000,
      "minBid": 120256,
      "failedCount": 2,
      "saleDate": "2026-09-15"
    }
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 154680
    },
    {
      "d": "2026-02",
      "p": 156440
    },
    {
      "d": "2026-05",
      "p": 160656
    },
    {
      "d": "2026-07",
      "p": 164817
    },
    {
      "d": "2026-08",
      "p": 162000
    }
  ],
  "agent": "과천래미안공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 과천시",
  "lat": 37.4314,
  "lng": 126.9882
},
{
  "id": "L180",
  "addr": "서울시 강동구 고덕동 고덕아르테온 801동",
  "region": "서울",
  "type": "아파트",
  "area": 84,
  "floor": 18,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-14",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 148000,
      "count": 5,
      "verified": true
    },
    "jeonse": {
      "price": 88000,
      "count": 6,
      "verified": true
    },
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 137995
    },
    {
      "d": "2026-02",
      "p": 140849
    },
    {
      "d": "2026-05",
      "p": 144858
    },
    {
      "d": "2026-07",
      "p": 148826
    },
    {
      "d": "2026-08",
      "p": 148000
    }
  ],
  "agent": "고덕아르테온공인중개사",
  "agentType": "공인중개사",
  "region2": "서울특별시 강동구",
  "lat": 37.5552,
  "lng": 127.1559
},
{
  "id": "L181",
  "addr": "세종시 새롬동 2-1생활권 세종자이더시티 602동",
  "region": "세종",
  "type": "아파트",
  "area": 99,
  "floor": 12,
  "rooms": 4,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-13",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 82000,
      "count": 2,
      "verified": true
    },
    "jeonse": {
      "price": 50000,
      "count": 6,
      "verified": true
    },
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 76920
    },
    {
      "d": "2026-02",
      "p": 78684
    },
    {
      "d": "2026-05",
      "p": 80992
    },
    {
      "d": "2026-07",
      "p": 82339
    },
    {
      "d": "2026-08",
      "p": 82000
    }
  ],
  "agent": "세종자이더시티공인중개사",
  "agentType": "공인중개사",
  "region2": "세종특별자치시",
  "lat": 36.5126,
  "lng": 127.2441
},
{
  "id": "L182",
  "addr": "경기도 하남시 미사동 미사강변 힐스테이트 302동",
  "region": "경기",
  "type": "아파트",
  "area": 84,
  "floor": 10,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-12",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 115000,
      "count": 4,
      "verified": true
    },
    "jeonse": {
      "price": 72000,
      "count": 5,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 110266,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 105992
    },
    {
      "d": "2026-02",
      "p": 108492
    },
    {
      "d": "2026-05",
      "p": 111075
    },
    {
      "d": "2026-07",
      "p": 112520
    },
    {
      "d": "2026-08",
      "p": 115000
    }
  ],
  "agent": "하남미사공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 하남시",
  "lat": 37.5491,
  "lng": 127.1997
},
{
  "id": "L183",
  "addr": "경기도 광주시 역동 광주역 힐스테이트 201동",
  "region": "경기",
  "type": "아파트",
  "area": 74,
  "floor": 8,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-11",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 55000,
      "count": 2,
      "verified": false
    },
    "jeonse": {
      "price": 36000,
      "count": 6,
      "verified": false
    },
    "wolse": {
      "deposit": 2000,
      "rent": 100,
      "mgmt": 9,
      "count": 6,
      "verified": true
    },
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 50568
    },
    {
      "d": "2026-02",
      "p": 51778
    },
    {
      "d": "2026-05",
      "p": 52626
    },
    {
      "d": "2026-07",
      "p": 53468
    },
    {
      "d": "2026-08",
      "p": 55000
    }
  ],
  "agent": "경기광주공인중개사",
  "agentType": "공인중개사",
  "region2": "경기도 광주시",
  "lat": 37.4294,
  "lng": 127.2572
},
{
  "id": "L184",
  "addr": "부산시 수영구 망미동 수영구청역 더샵 402동",
  "region": "부산",
  "type": "아파트",
  "area": 84,
  "floor": 14,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-10",
  "img": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75",
  "deals": {
    "sale": {
      "price": 75000,
      "count": 3,
      "verified": true
    },
    "jeonse": {
      "price": 48000,
      "count": 6,
      "verified": false
    },
    "wolse": null,
    "direct": null,
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 72469
    },
    {
      "d": "2026-02",
      "p": 73529
    },
    {
      "d": "2026-05",
      "p": 74859
    },
    {
      "d": "2026-07",
      "p": 75883
    },
    {
      "d": "2026-08",
      "p": 75000
    }
  ],
  "agent": "수영더샵공인중개사",
  "agentType": "공인중개사",
  "region2": "부산광역시 수영구",
  "lat": 35.1774,
  "lng": 129.1083
},
{
  "id": "L185",
  "addr": "대구시 수성구 황금동 수성못 더샵 802동",
  "region": "대구",
  "type": "아파트",
  "area": 84,
  "floor": 18,
  "rooms": 3,
  "baths": 2,
  "park": true,
  "elev": true,
  "confirmed": "2026-08-09",
  "img": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=75",
  "deals": {
    "sale": {
      "price": 89000,
      "count": 4,
      "verified": true
    },
    "jeonse": {
      "price": 55000,
      "count": 4,
      "verified": true
    },
    "wolse": null,
    "direct": {
      "dtype": "sale",
      "price": 85282,
      "verified": true
    },
    "auction": null
  },
  "realprice": [
    {
      "d": "2025-11",
      "p": 84797
    },
    {
      "d": "2026-02",
      "p": 85751
    },
    {
      "d": "2026-05",
      "p": 86783
    },
    {
      "d": "2026-07",
      "p": 89164
    },
    {
      "d": "2026-08",
      "p": 89000
    }
  ],
  "agent": "수성못더샵공인중개사",
  "agentType": "공인중개사",
  "region2": "대구광역시 수성구",
  "lat": 35.8471,
  "lng": 128.6213
}
];
