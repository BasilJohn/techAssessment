#import "EmulatorInfo.h"
#import <UIKit/UIKit.h>

@implementation EmulatorInfo

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(isEmulator:(RCTResponseSenderBlock)callback){
 @try{
   
   NSProcessInfo *processInfo = [NSProcessInfo processInfo];
   NSDictionary<NSString *, NSString *> *environment = [processInfo environment];
   NSString *simulator = [environment objectForKey:@"SIMULATOR_DEVICE_NAME"];
   NSString *isEmulator= @"false";
   if(simulator!=nil){
     isEmulator= @"true";
   }
   callback(@[[NSNull null], isEmulator]);
 }
 @catch(NSException *exception){
   callback(@[exception.reason, [NSNull null]]);
 }
}



@end

