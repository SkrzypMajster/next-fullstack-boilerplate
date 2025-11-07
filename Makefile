# Build docker image for production environment.
.PHONY: docker-build
docker-build:
	docker build -t next-fullstack-boilerplate:latest -f ./docker/prod/Dockerfile .