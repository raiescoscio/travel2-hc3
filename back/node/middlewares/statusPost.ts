import { json } from 'co-body'
import { UserInputError } from '@vtex/api'

export async function statusPost(ctx: Context, next: () => Promise<any>) {
  // const body = (await json(ctx.req)) as { code: number }

  const body = await json(ctx.req)

  // console.log(body)
  // const result = await ctx.clients.id.getEmailCodeAuthenticationToken
  const teste = await ctx.clients.masterdata.searchDocuments(
    { dataEntity: 'CL', where: `document=${'12345678900'}`, fields: ['name'], pagination: { pageSize: 1, page: 1 } }
  );
  console.log(teste)

  if (!body?.code) {
    throw new UserInputError('Please supply the code')
  }

  const { code } = body

  const res = await ctx.clients.status.getStatus(code).catch((reason) => {
    return reason?.response?.data
  })

  // console.log(res)

  ctx.set('Cache-Control', 'no-cache no-store')
  ctx.body = res
  ctx.status = code

  await next()
}
