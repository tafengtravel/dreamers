export const BannerHome = () => import('../..\\components\\BannerHome.vue' /* webpackChunkName: "components/banner-home" */).then(c => wrapFunctional(c.default || c))
export const BannerProduct = () => import('../..\\components\\BannerProduct.vue' /* webpackChunkName: "components/banner-product" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Icon = () => import('../..\\components\\Icon.vue' /* webpackChunkName: "components/icon" */).then(c => wrapFunctional(c.default || c))
export const ImageCarousel = () => import('../..\\components\\ImageCarousel.vue' /* webpackChunkName: "components/image-carousel" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const Member = () => import('../..\\components\\Member.vue' /* webpackChunkName: "components/member" */).then(c => wrapFunctional(c.default || c))
export const MemberNavbar = () => import('../..\\components\\MemberNavbar.vue' /* webpackChunkName: "components/member-navbar" */).then(c => wrapFunctional(c.default || c))
export const NavBar = () => import('../..\\components\\NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
export const ProductBoxview = () => import('../..\\components\\ProductBoxview.vue' /* webpackChunkName: "components/product-boxview" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
