import { prismaClient } from "../../../database/prismaClient";
import { kafkaConsumer } from "../kafka.consumer";

type ProductConsumer = {
    code:string,
    id:string
}

export async function createProductConsumer (){

    console.log("PRODUCT CONSUMER")
    const consumer = await kafkaConsumer("PRODUCT_CREATE")
    await consumer.run({
        eachMessage:async ({message}) => {
            const messageToString =  message.value!.toString()
            const product = JSON.parse(messageToString) as ProductConsumer

            await prismaClient.product.create({
                data:{
                    externalId:product.id,
                    email:product.code
                }
            })
            
        }
    })
}

createProductConsumer()