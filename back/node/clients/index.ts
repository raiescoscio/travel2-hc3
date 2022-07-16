import { IOClients } from '@vtex/api'
import { Catalog, OMS } from '@vtex/clients'

import Status from './status'

export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  }

  public get oms() {
    return this.getOrSet('oms', OMS)
  }
}
