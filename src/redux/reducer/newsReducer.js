const initialState = {
  data: [{
    "postId": "118547",
    "title": "Mort dan Alvirlo Resmi Keluar Dari LIVESCAPE, Siapa Pengganti Mereka?",
    "slug": "mort-dan-alvirlo-resmi-keluar-dari-livescape-siapa-pengganti-mereka",
    "thumbnail": "https://www.revivaltv.id/wp-content/uploads/2021/08/Livescape.jpg",
    "excerpt": "\nDua pemain PUBG Mobile dari tim LIVESCAPE, Mort dan Alvirlo baru saja mengumumkan bahwa sudah tidak lagi bermain untuk...",
    "author": "Pavel Tanujaya",
    "published_at": "Wednesday, 4 August 2021",
    "categories": [
    {
    "term_taxonomy_id": 1060,
    "term_id": 1060,
    "taxonomy": "category",
    "description": "",
    "parent": 5889,
    "count": 855,
    "pivot": {
    "object_id": 118547,
    "term_taxonomy_id": 1060
    },
    "term": {
    "term_id": 1060,
    "name": "PUBG",
    "slug": "pubg",
    "term_group": 0
    }
    }
    ],
    "page_views": "-"
    }],
  detail: [{"postId": "...",
  "title": "...",
  "slug": "mort-dan-alvirlo-resmi-keluar-dari-livescape-siapa-pengganti-mereka",
  "thumbnail": "...",
  "excerpt": "\nDua pemain PUBG Mobile dari tim LIVESCAPE, Mort dan Alvirlo baru saja mengumumkan bahwa sudah tidak lagi bermain untuk...",
  "author": "Pavel Tanujaya",
  "published_at": "Wednesday, 4 August 2021",
  "categories": [
  {
  "term_taxonomy_id": 1060,
  "term_id": 1060,
  "taxonomy": "category",
  "description": "",
  "parent": 5889,
  "count": 855,
  "pivot": {
  "object_id": 118547,
  "term_taxonomy_id": 1060
  },
  "term": {
  "term_id": 1060,
  "name": "PUBG",
  "slug": "pubg",
  "term_group": 0
  }
  }
  ],
  "page_views": "-"}],
  isLoading: false,
  category: [{}],
  competition: [{}]
};

const newsReducer = (state = initialState, action) => {
  // console.log(action.data)
  switch (action.type) {
    case "NEWS_SUCCESS":
      const item = action.data;
      return {
        ...state,
        data: item
      };
    case "NEWS_DETAIL_SUCCESS":
      const detail = action.detail;
      return {
        ...state,
        detail: detail
      };
    case "CATEGORY_SUCCESS":
      const category = action.category;
      // console.log(action, 'actt')
      return {
        ...state,
        category: category
      };
    case "COMPETITION_SUCCESS":
      const competition = action.competition;
      // console.log(action, 'actt')
      return {
        ...state,
        competition: competition
      };
    default:
      return state;
  }
}

export default newsReducer;