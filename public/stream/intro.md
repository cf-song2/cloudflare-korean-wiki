# Stream
- 서버리스 라이브 및 VOD 스트리밍을 위한 제품입니다.
- Cloudflare의 스트림을 통해 비디오를 위한 인프라를 구성하거나 유지보수 할 필요 없이 하나의 API를 통해 라이브 및 VOD를 업로드, 저장, 인코딩 및 전송할 수 있습니다.
<br>
<br>
<br>


## 비디오 업로드

| 기능  | 동작 |
|------|----|
| [기본 업로드 기능](https://developers.cloudflare.com/stream/uploading-videos/upload-video-file/) | - 200MB를 초과하지 않는 작은 파일의 경우 다음과 같이 업로드할 수 있다. <br>1. 대시보드를 통한 업로드 <br> + 드래그 & 드롭, 파일 선택 <br>2. Stream API를 이용한 업로드 <br> + Content-Type 헤더를 multipart/form-data로 설정하여 POST 요청을 수행 |
| [대용량 파일 업로드 (tus)](https://developers.cloudflare.com/stream/uploading-videos/resumable-uploads/) | - 200MB를 초과하는 대용량 파일의 경우, tus 프로토콜을 사용해 이어 올리기 (resumble upload) 기능을 활용할 수 있다. <br>- Python, Golang, Node.js 등의 언어로 다양한 tus 클라이언트를 사용할 수 있다. |
| [링크를 통한 업로드](https://developers.cloudflare.com/stream/uploading-videos/upload-via-link/) | - 클라우드 스토리지에 저장된 비디오 파일을 직접 가져올 수 있다. 파일의 HTTP URL을 제공하면 Stream이 자동으로 다운로드 및 인코딩을 수행한다.|
| [크리에이터의 직접 업로드](https://developers.cloudflare.com/stream/uploading-videos/direct-creator-uploads/) | - "/stream/direct_upload" 혹은 "/stream?direct_user-true" 등의 API endpoint를 통해 API 토큰을 노출하지 않고도 사용자가 비디오를 업로드할 수 있도록 일회용 URL을 생성할 수 있다. |

<br>


## 라이브 비디오 스트리밍

<br>

## 비디오 재생

<br>

## 비디오 변환

<br>

## 비디오 수정

<br>

## 비디오 관리

<br>

## 분석 도구