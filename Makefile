setup:
	docker volume create nodemodules
install:
	docker-compose run --rm install
dev:
	docker-compose --compatibility up