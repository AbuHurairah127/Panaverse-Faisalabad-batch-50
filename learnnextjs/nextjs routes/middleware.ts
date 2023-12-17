import { withAuth } from "next-auth/middleware"

export default withAuth(
  { 
    secret:"dsafjk#@4LKJDF@#$LS:KDFkSDFSDF"
  }
)

export const config = { matcher: ["/services"] }