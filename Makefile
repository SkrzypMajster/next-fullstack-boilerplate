.PHONY: docker-build
docker-build: # Build docker image for production environment.
	docker build -t next-fullstack-boilerplate:latest -f ./docker/prod/Dockerfile .

.PHONY: docker-start
docker-start: # Start production application.
	docker run -p 3000:3000 --name next_fullstack_boilerplate --network=next_fullstack_boilerplate -d next-fullstack-boilerplate