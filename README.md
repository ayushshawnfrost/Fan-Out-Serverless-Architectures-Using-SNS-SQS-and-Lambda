
# ✨🌐✨Fan-Out Serverless Architectures Using SNS, SQS and Lambda (Event Driven Architecture) ✨🌐✨

### 🌩️Proposed Architecture:

![image](https://github.com/ayushshawnfrost/Fan-Out-Serverless-Architectures-Using-SNS-SQS-and-Lambda/assets/23500476/da687f4f-2c19-4df3-832c-8310cac8c3f3)

### 🌩️Front-End Architecture:

![image](https://github.com/ayushshawnfrost/Fan-Out-Serverless-Architectures-Using-SNS-SQS-and-Lambda/assets/23500476/c1504abe-542b-4712-8515-a5294f1e2568)

### 🌩️Web Application:

![image](https://github.com/ayushshawnfrost/Fan-Out-Serverless-Architectures-Using-SNS-SQS-and-Lambda/assets/23500476/9f378414-b351-4f3e-b628-a26df58ad9d5)

## Challenges in Current Infrastructure ⚠️

In the hotel industry, managing room bookings efficiently while ensuring seamless communication between various systems poses a significant challenge.

Traditional point-to-point communication methods lead to tightly coupled systems, hindering scalability and flexibility. Moreover, handling asynchronous message communication manually introduces complexity and potential points of failure, impacting the customer. To address this, I am proposing a “Hotel Room Booking System” in an event-driven fanout pattern. This solution will assure Scalability, Decoupling, Reliability, and easy Maintenance by incorporating various cloud-based managed services provided by AWS.

### The current room booking system faces several challenges:

- **Dependency Management:** Tight coupling between booking management, payment processing, room availability, and customer notifications leads to complex dependencies.
- **Scalability:** With fluctuating demand and varying booking volumes, the existing system struggles to handle peak loads efficiently.
- **Reliability:** Manual handling of asynchronous communication introduces reliability issues, such as message loss or duplication.
- **Maintenance:** Since the systems are deployed on-premise, hence we are also responsible for its end-to-end maintenance.

## Proposed Solution 🛠️

The proposed solution offers the following benefits:

- **Scalability:** By leveraging SNS, the system gains the ability to scale seamlessly to handle fluctuating booking volumes.
- **Decoupling:** Implementing the fanout pattern with SNS enables decoupling of booking management, customer notifications, and Analytics services.
- **Reliability:** SNS provides built-in features for handling message delivery, including failure handling and retry logic. This ensures reliable communication between system components, reducing the risk of message loss or duplication.
- **Maintenance:** Since the services used to architect the system are fully managed services by AWS, hence AWS is responsible for most of the heavy lifting tasks such as provisioning, scaling, and patch management.

## Proposed Architecture 🏢

In the hotel industry, managing room bookings efficiently while ensuring seamless communication between various systems poses a significant challenge.

Traditional point-to-point communication methods lead to tightly coupled systems, hindering scalability and flexibility. Moreover, handling asynchronous message communication manually introduces complexity and potential points of failure, impacting the customer. To address this, I am proposing a “Hotel Room Booking System” in an event-driven fanout pattern. This solution will assure Scalability, Decoupling, Reliability, and easy Maintenance by incorporating various cloud-based managed services provided by AWS.

### The current room booking system faces several challenges:

- **Dependency Management:** Tight coupling between booking management, payment processing, room availability, and customer notifications leads to complex dependencies.
- **Scalability:** With fluctuating demand and varying booking volumes, the existing system struggles to handle peak loads efficiently.
- **Reliability:** Manual handling of asynchronous communication introduces reliability issues, such as message loss or duplication.
- **Maintenance:** Since the systems are deployed on-premise, hence we are also responsible for its end-to-end maintenance.

## Proposed Solution 🛠️

The proposed solution offers the following benefits:

- **Scalability:** By leveraging SNS, the system gains the ability to scale seamlessly to handle fluctuating booking volumes.
- **Decoupling:** Implementing the fanout pattern with SNS enables decoupling of booking management, customer notifications, and Analytics services.
- **Reliability:** SNS provides built-in features for handling message delivery, including failure handling and retry logic. This ensures reliable communication between system components, reducing the risk of message loss or duplication.
- **Maintenance:** Since the services used to architect the system are fully managed services by AWS, hence AWS is responsible for most of the heavy lifting tasks such as provisioning, scaling, and patch management.

## Beginner Friendly Tutorial 📚

If you want to build your own, I have made a beginner-friendly step-by-step tutorial.

https://medium.com/@ayushjudesharp/building-fan-out-serverless-architectures-using-sns-sqs-and-lambda-event-driven-architecture-911a7b4eadfb





