# Workflows - usage


## Docker Build and Push Image to Github Container Registry

```yml
on:
  push:
    
jobs:
  
  build_and_push:
    uses: andrejvysny/workflows/.github/workflows/docker_build_push_ghcr.yaml@main
    with:
      dockerfile: MyDockerFile   #optional - path to dockerfile - default "Dockerfile"
      context: ./my-folder/      #optional - default "."
      target: production         #optional
      tags: ghcr.io/{my-username}/{my-repo}:{version}
    secrets:
      access_token: ${{ secrets.GITHUB_TOKEN }}
```