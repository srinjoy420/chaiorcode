async function register() {
    await collectdata();
    vailddata();
    await insertdb();
    sendEmail();
    sendNotification()
    
}
register().then(()=>console.log('doen')
).catch(()=>console.log('error'));