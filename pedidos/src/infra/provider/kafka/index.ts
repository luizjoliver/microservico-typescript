import { Kafka, logLevel } from 'kafkajs';


const kafka = new Kafka({
    clientId: 'teste-ms',
    brokers: ['https://enhanced-moth-9906-eu2-kafka.upstash.io:9092'],  
    ssl: true,
    sasl: {
        mechanism: 'scram-sha-256',  
        username: 'ZW5oYW5jZWQtbW90aC05OTA2JP9cJ5IsTTHH4wdN3-kz4hEDo5RT-lwYELEJolI',   
        password: 'NjdiNDc0NjctY2UwNi00N2ZlLWI0ZjYtZGJkYjc1NjkwOGNk'    
    },
    logLevel: logLevel.ERROR,
    });




    
export {kafka}
