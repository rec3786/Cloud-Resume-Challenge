.PHONY: build

build:
	sam build

deploy-infra:
	sam build && aws-vault exec cloud-user --no-session -- sam deploy

deploy-site:
	aws-vault exec cloud-user --no-session -- aws s3 sync ./resume-site s3://my-cloud-resume-challenge-17jan