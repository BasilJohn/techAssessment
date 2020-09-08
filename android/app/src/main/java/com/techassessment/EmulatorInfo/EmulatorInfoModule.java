package com.techassessment.EmulatorInfo;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import 	android.os.Build; 
public class EmulatorInfoModule extends ReactContextBaseJavaModule {
   public EmulatorInfoModule(ReactApplicationContext reactContext) {
       super(reactContext);
   }
   @Override
   public String getName() {
       return "EmulatorInfo";
   }
   @ReactMethod
   public void isEmulator(Callback cb) {
       try{
           if(Build.FINGERPRINT.startsWith("generic")
                || Build.FINGERPRINT.startsWith("unknown")
                || Build.MODEL.contains("google_sdk")
                || Build.MODEL.contains("Emulator")
                || Build.MODEL.contains("Android SDK built for x86")
                || Build.MANUFACTURER.contains("Genymotion")
                || (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"))
                || "google_sdk".equals(Build.PRODUCT)){
                        cb.invoke(null, "true");
                }
                else{
                    cb.invoke(null, "false");
                }
           
       }catch (Exception e){
           cb.invoke(e.toString(), null);
       }
   }
}