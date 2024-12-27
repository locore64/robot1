robobit.select_model(RBModel.Mk3)
basic.forever(function () {
    if (robobit.sonar(RBPingUnit.Centimeters) < 15) {
        robobit.startScanner(0xff0000, 100)
    } else {
    	
    }
})
