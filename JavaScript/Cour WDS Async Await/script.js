async function doWork() {
    try {
        const response = await makeRequest('Google')
        console.log('response receveid');
        const processedResponse = await processRequest(reponse)
        console.log(processedResponse);
    } catch (err) {
        console.log(err);
    }
}

doWork();