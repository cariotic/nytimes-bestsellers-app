export interface APIResponseOverview {
    status: string
    copyright: string
    num_results: number
    results: ResultsOverview
  }
  
  export interface ResultsOverview {
    bestsellers_date: string
    published_date: string
    published_date_description: string
    previous_published_date: string
    next_published_date: string
    lists: List[]
  }
  
  export interface List {
    list_id?: number
    list_name: string
    list_name_encoded: string
    display_name: string
    updated: string
    list_image?: any
    list_image_width?: any
    list_image_height?: any
    books: Book[]
  }
  
  export interface Book {
    age_group: string
    amazon_product_url: string
    article_chapter_link: string
    author: string
    book_image: string
    book_image_width: number
    book_image_height: number
    book_review_link: string
    contributor: string
    contributor_note: string
    created_date: string
    description: string
    first_chapter_link: string
    price: string
    primary_isbn10: string
    primary_isbn13: string
    book_uri: string
    publisher: string
    rank: number
    rank_last_week: number
    sunday_review_link: string
    title: string
    updated_date: string
    weeks_on_list: number
    buy_links: BuyLink[]
  }
  
  export interface BuyLink {
    name: string
    url: string
  }

  export interface APIResponseFullList {
    status: string
    copyright: string
    num_results: number
    last_modified: string
    results: ResultsFullList
  }
  
  export interface ResultsFullList {
    list_name: string
    list_name_encoded: string
    bestsellers_date: string
    published_date: string
    published_date_description: string
    next_published_date: string
    previous_published_date: string
    display_name: string
    normal_list_ends_at: number
    updated: string
    books: Book[]
    corrections: any[]
  }