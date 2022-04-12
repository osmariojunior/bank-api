import { Controller, Get } from '@nestjs/common';

@Controller('my-fist')
export class MyFistController {
  @Get('hello-world')
  index() {
    return { key: 'value' };
  }
}
