import {Alert} from 'react-native'
import {BASE_URL} from '../../util/utility'
import axios from 'axios'

export const getNewsSuccess = (data) => ({
    type: 'NEWS_SUCCESS',
    data: data
})
export const getNewsDetailSuccess = (data) => ({
    type: 'NEWS_DETAIL_SUCCESS',
    detail: data
})
export const getCategorySuccess = (data) => ({
    type: 'CATEGORY_SUCCESS',
    category: data
})

export const getCompetitionSuccess = (data) => ({
    type: 'COMPETITION_SUCCESS',
    competition: data
})

export const getNewsAction = () => {
    return async (dispatch) => {
      try {
        // console.log('hit action')
        let url = `${BASE_URL}/news`
        const res = await axios.get(url, {});
        dispatch(getNewsSuccess(res.data));
        // console.log(res, 'ressah')
        // console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    };
  };
  
export const getNewsDetailAction = (id) => {
    return async (dispatch) => {
      try {
        // console.log('hit action')
        let url = `${BASE_URL}/news/${id}`
        const res = await axios.get(url, {});
        dispatch(getNewsDetailSuccess(res.data));
        // console.log(res, 'ressah')
        // console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    };
  };

export const getCategoryAction = () => {
    return async (dispatch) => {
      try {
        let url = `${BASE_URL}/category`
        const res = await axios.get(url, {});
        dispatch(getCategorySuccess(res.data));
        // console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    };
  };

export const getCompetitionAction = () => {
    return async (dispatch) => {
      try {
        let url = `${BASE_URL}/competition`
        const res = await axios.get(url, {});
        dispatch(getCompetitionSuccess(res.data));
        // console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    };
  };