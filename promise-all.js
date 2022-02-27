Promise.all=(promises)=>{
    let responseData = [];
    let errorResp = [];

    return new Promise((resolve,reject)=>{
        promises.forEach(async (singlePromise, index)=>{
            try{
                let res = await singlePromise;
                responseData.push(res);
                if(index===promises.length-1){
                    if(errorResp.length>0){
                        reject(errorResp);
                    }else{
                        resolve(responseData);
                    }
                }
            }catch(err){
                errorResp.push(err);
                reject(err);
            }
        })
    })
}