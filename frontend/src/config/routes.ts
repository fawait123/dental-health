export const routes = {
  admin: {
    user: {
      dashboard: '/user',
      products: '/user',
      createProduct: '/user/create',
      productDetails: (slug: string) => `/user/products/${slug}`,
      editData: (id: string) => `/user/${id}/edit`,
      categories: '/user/categories',
      createCategory: '/user/categories/create',
      editCategory: (id: string) => `/user/categories/${id}/edit`,
      orders: '/user/orders',
      createOrder: '/user/orders/create',
      orderDetails: (id: string) => `/user/orders/${id}`,
      editOrder: (id: string) => `/user/orders/${id}/edit`,
      reviews: '/user/reviews',
      shop: '/user/shop',
      cart: '/user/cart',
      checkout: '/user/checkout',
      trackingId: (id: string) => `/user/tracking/${id}`,
    },
  },
  dashboard: '/',
  // control diabetes
  controldiabetes: {
    dashboard: '/control-diabetes',
    products: '/control-diabetes',
    createProduct: '/control-diabetes/create',
    productDetails: (slug: string) => `/control-diabetes/products/${slug}`,
    editData: (id: string) => `/control-diabetes/${id}/edit`,
    categories: '/control-diabetes/categories',
    createCategory: '/control-diabetes/categories/create',
    editCategory: (id: string) => `/control-diabetes/categories/${id}/edit`,
    orders: '/control-diabetes/orders',
    createOrder: '/control-diabetes/orders/create',
    orderDetails: (id: string) => `/control-diabetes/orders/${id}`,
    editOrder: (id: string) => `/control-diabetes/orders/${id}/edit`,
    reviews: '/control-diabetes/reviews',
    shop: '/control-diabetes/shop',
    cart: '/control-diabetes/cart',
    checkout: '/control-diabetes/checkout',
    trackingId: (id: string) => `/control-diabetes/tracking/${id}`,
  },
  applicationUse: {
    dashboard: '/application-use',
    products: '/application-use',
    createProduct: '/application-use/create',
    productDetails: (slug: string) => `/application-use/products/${slug}`,
    ediProduct: (slug: string) => `/application-use/products/${slug}/edit`,
    categories: '/application-use/categories',
    createCategory: '/application-use/categories/create',
    editCategory: (id: string) => `/application-use/categories/${id}/edit`,
    orders: '/application-use/orders',
    createOrder: '/application-use/orders/create',
    orderDetails: (id: string) => `/application-use/orders/${id}`,
    editOrder: (id: string) => `/application-use/orders/${id}/edit`,
    reviews: '/application-use/reviews',
    shop: '/application-use/shop',
    cart: '/application-use/cart',
    checkout: '/application-use/checkout',
    trackingId: (id: string) => `/application-use/tracking/${id}`,
  },
  dentalHealtEducationPage: {
    dashboard: '/dental-health-education',
    products: '/dental-health-education',
    createProduct: '/dental-health-education/create',
    productDetails: (slug: string) =>
      `/dental-health-education/products/${slug}`,
    ediProduct: (slug: string) =>
      `/dental-health-education/products/${slug}/edit`,
    categories: '/dental-health-education/categories',
    createCategory: '/dental-health-education/categories/create',
    editCategory: (id: string) =>
      `/dental-health-education/categories/${id}/edit`,
    orders: '/dental-health-education/orders',
    createOrder: '/dental-health-education/orders/create',
    orderDetails: (id: string) => `/dental-health-education/orders/${id}`,
    editOrder: (id: string) => `/dental-health-education/orders/${id}/edit`,
    reviews: '/dental-health-education/reviews',
    shop: '/dental-health-education/shop',
    cart: '/dental-health-education/cart',
    checkout: '/dental-health-education/checkout',
    trackingId: (id: string) => `/dental-health-education/tracking/${id}`,
  },
  brushingChecklist: {
    dashboard: '/brushing-checklist',
    products: '/brushing-checklist',
    createProduct: '/brushing-checklist/create',
    productDetails: (slug: string) => `/brushing-checklist/products/${slug}`,
    ediProduct: (slug: string) => `/brushing-checklist/products/${slug}/edit`,
    categories: '/brushing-checklist/categories',
    createCategory: '/brushing-checklist/categories/create',
    editCategory: (id: string) => `/brushing-checklist/categories/${id}/edit`,
    orders: '/brushing-checklist/orders',
    createOrder: '/brushing-checklist/orders/create',
    orderDetails: (id: string) => `/brushing-checklist/orders/${id}`,
    editOrder: (id: string) => `/brushing-checklist/orders/${id}/edit`,
    reviews: '/brushing-checklist/reviews',
    shop: '/brushing-checklist/shop',
    cart: '/brushing-checklist/cart',
    checkout: '/brushing-checklist/checkout',
    trackingId: (id: string) => `/brushing-checklist/tracking/${id}`,
  },
  dentalHealt: {
    dashboard: '/dental-health',
    products: '/dental-health',
    createProduct: '/dental-health/create',
    productDetails: (slug: string) => `/dental-health/products/${slug}`,
    ediProduct: (slug: string) => `/dental-health/products/${slug}/edit`,
    categories: '/dental-health/categories',
    createCategory: '/dental-health/categories/create',
    editCategory: (id: string) => `/dental-health/categories/${id}/edit`,
    orders: '/dental-health/orders',
    createOrder: '/dental-health/orders/create',
    orderDetails: (id: string) => `/dental-health/orders/${id}`,
    editOrder: (id: string) => `/dental-health/orders/${id}/edit`,
    reviews: '/dental-health/reviews',
    shop: '/dental-health/shop',
    cart: '/dental-health/cart',
    checkout: '/dental-health/checkout',
    trackingId: (id: string) => `/dental-health/tracking/${id}`,
  },

  // not use
  eCommerce: {
    dashboard: '/ecommerce',
    products: '/ecommerce/products',
    createProduct: '/ecommerce/products/create',
    productDetails: (slug: string) => `/ecommerce/products/${slug}`,
    ediProduct: (slug: string) => `/ecommerce/products/${slug}/edit`,
    categories: '/ecommerce/categories',
    createCategory: '/ecommerce/categories/create',
    editCategory: (id: string) => `/ecommerce/categories/${id}/edit`,
    orders: '/ecommerce/orders',
    createOrder: '/ecommerce/orders/create',
    orderDetails: (id: string) => `/ecommerce/orders/${id}`,
    editOrder: (id: string) => `/ecommerce/orders/${id}/edit`,
    reviews: '/ecommerce/reviews',
    shop: '/ecommerce/shop',
    cart: '/ecommerce/cart',
    checkout: '/ecommerce/checkout',
    trackingId: (id: string) => `/ecommerce/tracking/${id}`,
  },
  support: {
    dashboard: '/support',
    inbox: '/support/inbox',
    supportCategory: (category: string) => `/support/inbox/${category}`,
    messageDetails: (id: string) => `/support/inbox/${id}`,
    snippets: '/support/snippets',
    createSnippet: '/support/snippets/create',
    viewSnippet: (id: string) => `/support/snippets/${id}`,
    editSnippet: (id: string) => `/support/snippets/${id}/edit`,
    templates: '/support/templates',
    createTemplate: '/support/templates/create',
    viewTemplate: (id: string) => `/support/templates/${id}`,
    editTemplate: (id: string) => `/support/templates/${id}/edit`,
  },
  logistics: {
    dashboard: '/logistics',
    shipmentList: '/logistics/shipments',
    customerProfile: '/logistics/customer-profile',
    createShipment: '/logistics/shipments/create',
    editShipment: (id: string) => `/logistics/shipments/${id}/edit`,
    shipmentDetails: (id: string) => `/logistics/shipments/${id}`,
    tracking: (id: string) => `/logistics/tracking/${id}`,
  },
  analytics: '/analytics',
  file: {
    dashboard: '/file',
    manager: '/file-manager',
    upload: '/file-manager/upload',
    create: '/file-manager/create',
  },
  pos: {
    index: '/point-of-sale',
  },
  eventCalendar: '/event-calendar',
  rolesPermissions: '/roles-permissions',
  invoice: {
    home: '/invoice',
    create: '/invoice/create',
    details: (id: string) => `/invoice/${id}`,
    edit: (id: string) => `/invoice/${id}/edit`,
  },
  widgets: {
    cards: '/widgets/cards',
    icons: '/widgets/icons',
    charts: '/widgets/charts',
    maps: '/widgets/maps',
    banners: '/widgets/banners',
  },
  tables: {
    basic: '/tables/basic',
    collapsible: '/tables/collapsible',
    enhanced: '/tables/enhanced',
    pagination: '/tables/pagination',
    search: '/tables/search',
    stickyHeader: '/tables/sticky-header',
  },
  multiStep: '/multi-step',
  forms: {
    profileSettings: '/forms/profile-settings',
    notificationPreference: '/forms/profile-settings/notification',
    personalInformation: '/forms/profile-settings/profile',
    newsletter: '/forms/newsletter',
  },
  search: {
    realEstate: '/search/real-estate',
    nft: '/search/nft',
    flightAndHotel: '/search/flight',
  },
  emailTemplates: '/email-templates',
  profile: '/profile',
  welcome: '/welcome',
  comingSoon: '/coming-soon',
  accessDenied: '/access-denied',
  notFound: '/not-found',
  maintenance: '/maintenance',
  blank: '/blank',
  auth: {
    signUp1: '/auth/sign-up',
    signUp2: '/auth/sign-up-2',
    signUp3: '/auth/sign-up-3',
    signUp4: '/auth/sign-up-4',
    signUp5: '/auth/sign-up-5',
    // sign in
    signIn1: '/auth/sign-in-1',
    signIn2: '/auth/sign-in-2',
    signIn3: '/auth/sign-in-3',
    signIn4: '/auth/sign-in-4',
    signIn5: '/auth/sign-in-5',
    // forgot password
    forgotPassword1: '/auth/forgot-password-1',
    forgotPassword2: '/auth/forgot-password-2',
    forgotPassword3: '/auth/forgot-password-3',
    forgotPassword4: '/auth/forgot-password-4',
    forgotPassword5: '/auth/forgot-password-5',
    // OTP
    otp1: '/auth/otp-1',
    otp2: '/auth/otp-2',
    otp3: '/auth/otp-3',
    otp4: '/auth/otp-4',
    otp5: '/auth/otp-5',
  },
  signIn: '/signin',
};
