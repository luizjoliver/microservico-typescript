import { prismaClient } from "../../../database/prismaClient";
import { kafkaConsumer } from "../kafka.consumer";

type CustomerConsumer = {
    email:string,
    id:string
}

export async function createCustomerConsumer (){

    console.log("CUSTOMER CONSUMER")
    const consumer = await kafkaConsumer("CUSTOMER_CREATED")
    await consumer.run({
        eachMessage:async ({message}) => {
            const messageToString =  message.value!.toString()
            const costumer = JSON.parse(messageToString) as CustomerConsumer

            await prismaClient.customer.create({
                data:{
                    externalId:costumer.id,
                    email:costumer.email
                }
            })
            
        }
    })
}

createCustomerConsumer()