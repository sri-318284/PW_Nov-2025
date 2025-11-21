function launchBrowser (browserName){

    if(browserName=="Chrome"){

        console.log("Browser name is chrome");
    }

        else{

            console.log("other browser");

        }
        

    


}

launchBrowser("safari");

function runTests(testType){

    switch (testType) {
        case "Smoke Testing":
            console.log("Smoke Testing");
            
            
            break;

        case "Sanity Testing":
             console.log("Sanity Testing");
            
            break;

        case "Regression Testing":
             console.log("Regression Testing");
            break;
    
        default:
            console.log("Smoke Testing");
            
            break;
    }
}

runTests("Regression Testing");