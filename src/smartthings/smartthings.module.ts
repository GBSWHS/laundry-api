import { Module } from '@nestjs/common'
import { HttpModule } from 'nestjs-undici'
import { SmartthingsService } from './smartthings.service'

@Module({
  imports: [
    HttpModule.register({})
  ],
  providers: [SmartthingsService],
  exports: [SmartthingsService, HttpModule]
})
export class SmartthingsModule {}
