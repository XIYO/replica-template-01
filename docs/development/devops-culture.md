# DevOps 문화

개발과 운영의 벽을 허물고 더 빠르게 가치를 전달하는 방법

## DevOps란 무엇인가?

DevOps는 단순한 도구나 프로세스가 아닌, 개발(Development)과 운영(Operations)의 협업 문화입니다. 빠른 피드백 루프와 지속적인 개선을 통해 소프트웨어를 더 빠르고 안정적으로 배포합니다.

### 핵심 원칙

**CI/CD 파이프라인**
```yaml
# GitHub Actions 예시
name: CI/CD Pipeline
on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build
        run: npm run build
      - name: Test
        run: npm test
      - name: Deploy
        run: npm run deploy
```

### 인프라 as 코드 (IaC)

**Terraform으로 인프라 관리**
```hcl
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"

  tags = {
    Name        = "web-server"
    Environment = "production"
  }
}
```

### 모니터링과 관찰 가능성

| 영역 | 도구 | 용도 |
|-----|------|------|
| 메트릭 | Prometheus, Grafana | 시스템 지표 수집/시각화 |
| 로깅 | Loki, ELK Stack | 로그 수집/분석 |
| 트레이싱 | Jaeger, Zipkin | 분산 추적 |
| APM | Datadog, New Relic | 애플리케이션 성능 모니터링 |

### GitOps의 부상

- **ArgoCD**: 쿠버네티스 GitOps 도구
- **Flux**: CNCF 졸업 프로젝트
- **선언적 인프라**: Git을 단일 진실 소스로 사용

### 플랫폼 엔지니어링

2026년 현재, DevOps를 넘어 플랫폼 엔지니어링이 주목받고 있습니다:

- **내부 개발자 플랫폼(IDP)** 구축
- **셀프서비스 인프라** 제공
- **개발자 경험(DX)** 중심 설계
- **Backstage**: Spotify가 만든 개발자 포털
