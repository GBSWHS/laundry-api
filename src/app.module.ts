import { Module } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'
import { WasherModule } from './washer/washer.module'
import { ReserveModule } from './reserve/reserve.module'
import { SmartthingsModule } from './smartthings/smartthings.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ScheduleModule.forRoot(),
    WasherModule,
    ReserveModule,
    SmartthingsModule
  ]
})
export class AppModule {}
