import * as graphql from "@nestjs/graphql";
import { DemoRequestResolverBase } from "./base/demoRequest.resolver.base";
import { DemoRequest } from "./base/DemoRequest";
import { DemoRequestService } from "./demoRequest.service";

@graphql.Resolver(() => DemoRequest)
export class DemoRequestResolver extends DemoRequestResolverBase {
  constructor(protected readonly service: DemoRequestService) {
    super(service);
  }
}
