# Lakpa's Personal Portfolio

### View my portfolio website: https://www.lakpa-sherpa.click/
### Taken some inspirations from the template created by @saadpasta 
### This project was deployed on AWS. Please refer the following diagram on how I did it:

(https://github.com/menlasherpa/Personal-portfolio/assets/22425056/762fab94-df5c-4b7c-896e-35170e6cd154)


## Day 1: Oct 20, 2023
- Bought a .click domain from AWS via Route53
- Searched for template for my portfolio 

## Day 2: Oct 21, 2023
- Customized the front end as per my need
- Wrote blog for my portfolio
- Set up links to blog
- Created S3 bucket
- Set up SNS for receving an email when messages are received

## Day 3: Oct 22, 2023
-  Did client side validation on the contact me form

## Day 4: Oct 23, 2023:
- Read slides for final
- Did backend. Set up API Gateway for REST APIs, created DynamoDB table to store the messages. Created a Lambda as well

## Day 5: Oct 24, 2023
- Worked on Lambda code to receive messages from front end
- Uploaded the build files to S3 bucket

## Day 6: Oct 26, 2023
- Made some final changes on client validation for contact form
- Uploaded final build codes on S3 bucket
- Worked on setting up the Route53 records.
- Created cloudfront in front of S3
- Issued certificate and then redirected the records to the cloudfront instead of S3
- Finalized the Lambda code, gave permission for SES to send email when user fill the contact form.
- Created API gateway to trigger the Lambda code, tested the URL on postman to make sure it is working and email is being received.
- Edited my blog

## Day 7: Oct 27, 2023
- For additional functionality, created SQS and DynamoDB table to store the new messgaes from contact me form
- Created video recording for project demonstration




