# LB의 종류
## L7 LB
- [여기](https://developers.cloudflare.com/learning-paths/load-balancing/planning/types-load-balancers/)를 참조하세요.
- L7 LB는 각 HTTP/HTTPS 요청에 포함된 정보(HTTP 헤더, URI, 쿠키, 데이터 유형 등)를 기반으로 특정 엔드포인트로 트래픽을 전달합니다.
- 클라이언트가 애플리케이션을 방문하면, Cloudflare는 (1) 트래픽 스티어링 정책과 (2) 엔드포인트 가중치에 따라 요청을 정상적인 엔드포인트로 라우팅합니다.
- Cloudflare 설정이 proxy (오렌지 구름) 일때 수행됩니다.

### 장점
- DNS 전용 LB와의 비교 대비 장점을 의미합니다.

  + 엔드포인트의 IP 주소를 숨겨 DDoS 공격으로부터 보호
  + DNS 캐싱의 영향을 받을 수 있는 경우보다 더 빠른 페일오버와 정확한 라우팅을 제공
  + Cloudflare의 캐싱, Workers, WAF와 같은 다른 기능과 통합
  + 맞춤형 세션 지속성 (session affinity) 및 엔드포인트 드레인을 지원

## DNS only LB
- DNS 전용 로드 밸런서는 클라이언트의 DNS 쿼리에 대한 응답으로 특정 IP 주소를 반환하여 트래픽을 라우팅합니다.
- 클라이언트가 앱을 방문할때, Cloudflare가 트래픽 스티어링 정책과 엔드포인트 수준의 스티어링 정책에 따라 정상적인 엔드포인트의 주소를 제공합니다. 그러나 DNS 쿼리 응답에 의존하므로, 클라이언트가 캐시된 응답을 가진 경우 이전 목적지로 연결, LB를 무시하게 될 수 있습니다.
- Cloudflare 설정이 unproxied (회색 구름) 일때 수행됩니다.

### 제한 사항
- L7 LB와의 비교 대비 제한 사항을 의미합니다.

  + 엔드포인트의 IP 주소를 숨기지 않으므로, DDoS 공격에 취약할 수 있습니다.
  + DNS 리졸버와 캐시 설정에 의존해야 하므로, failover가 느리고 라우팅 정확도가 낮습니다.
  + Cloudflare의 캐싱, Workers, WAF 등의 기능과 통합할 수 없습니다.
  + Cloudflare에 대한 권한 쿼리를 증가시켜, 사용량 기반 청구를 사용하는 고객에게 추가 비용이 발생할 수 있습니다.
  + Session Affinity를 지원하지 않습니다.

