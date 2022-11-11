import type { ClientOpts } from 'redis'
import { CacheModule, Module } from '@nestjs/common'
import * as redisStore from 'cache-manager-redis-store'
import { WasherService } from './washer.service'
import { SmartthingsModule } from 'src/smartthings/smartthings.module'
import { SmartthingsService } from 'src/smartthings/smartthings.service'

@Module({
  imports: [
    CacheModule.register <ClientOpts>({
      store: redisStore,
      host: 'localhost',
      port: 6379
    }),
    SmartthingsModule
  ],
  providers: [WasherService, SmartthingsService]
})
export class WasherModule {}
