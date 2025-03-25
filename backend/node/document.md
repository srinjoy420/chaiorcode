1. node js is a c++ v8 engine 
2.it a single treaded language
3. node first init projrct (main thread)
    execute top level code.
    fist in top level require is run
    event call back register
    then start event loop(while (true){
        sabji timer ke call back chalao
        year kisi a file wala kam ho gaya hai to batao
        run all set immediate
        run close callbacks
        if(no code){
            breck exit
        }
        elae{
            then check again
        }

    })
    run expired timers
    input/output polling (fs mosde)
    run setimmediate callbacks(not avalible in browaaer)
    close callbacks run 
    exit


** homework :_own express
read node how event loops works
