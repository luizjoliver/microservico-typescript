import { kafka } from ".";




class KafkaSendMessage {
    async execute (topic:string,payload:any):Promise<void>{

        const producer = kafka.producer({
          
        })


        await producer.connect();
        console.log("message sent to topic " + topic )
        console.log(payload)
        
        producer.send({
            topic,
            messages:[
                {value:JSON.stringify(payload)}
            ]
        })

        await producer.disconnect()
    }
}
export {KafkaSendMessage}