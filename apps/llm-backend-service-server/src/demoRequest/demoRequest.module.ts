import { Module } from "@nestjs/common";
import { DemoRequestModuleBase } from "./base/demoRequest.module.base";
import { DemoRequestService } from "./demoRequest.service";
import { DemoRequestController } from "./demoRequest.controller";
import { DemoRequestResolver } from "./demoRequest.resolver";

@Module({
  imports: [DemoRequestModuleBase],
  controllers: [DemoRequestController],
  providers: [DemoRequestService, DemoRequestResolver],
  exports: [DemoRequestService],
})
export class DemoRequestModule {}
