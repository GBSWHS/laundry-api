import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'
import { Cache } from 'cache-manager'
import { SmartthingsService } from 'src/smartthings/smartthings.service'

@Injectable()
export class WasherService {
  constructor (
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly smarttingsService: SmartthingsService
  ) {}

  @Cron('0 * * * * *')
  async handleCron (): Promise<void> {
    console.log(await this.smarttingsService.getDevices())
  }
}
