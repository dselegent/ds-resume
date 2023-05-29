import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'
import type IRESUMEJSON from '@/interface/resume'
import RESUME_JSON from '@/schema/resume'
import type { IMATERIALITEM } from '@/interface/material'
import { cloneDeep } from 'lodash-es'

type ResumeJsonStateType = {
  resumeJsonData: IRESUMEJSON
}
const resumeJsonState: ResumeJsonStateType = {
  resumeJsonData: cloneDeep(RESUME_JSON), // 简历数据
}
// 简历数据
const resumeJsonSlice = createSlice({
  name: 'resumeJson',
  initialState: resumeJsonState,
  reducers: {
    // 改变简历数据
    changeResumeJsonData(state, { payload }: PayloadAction<IRESUMEJSON>) {
      state.resumeJsonData = payload
    },
    // 改变全局样式
    changeResumeJsonGlobalStyleData(
      state,
      {
        payload,
      }: PayloadAction<{
        key: string
        value: string | number
      }>
    ) {
      let { key, value } = payload
      state.resumeJsonData.GLOBAL_STYLE[key] = value
    },
    // 改变模块数据
    changeResumeJsonModelData(
      state,
      {
        payload,
      }: PayloadAction<{
        flag: string
        cptKeyId: string
        key: string
        value: string | number
      }>
    ) {
      let { flag, cptKeyId, key, value } = payload
      let modelIndex = state.resumeJsonData.COMPONENTS.findIndex((item: IMATERIALITEM) => item.keyId === cptKeyId)
      if (flag === 'isShow') {
        state.resumeJsonData.COMPONENTS[modelIndex].data.isShow[key] = value
      } else {
        state.resumeJsonData.COMPONENTS[modelIndex][flag][key] = value
      }
    },
    // 改变模块排序
    changeResumeJsonComponentSort(state, { payload }: PayloadAction<Array<IMATERIALITEM | any>>) {
      state.resumeJsonData.COMPONENTS = payload
    },
    // 改变模块显示隐藏
    changeResumeJsonComponentShow(
      state,
      {
        payload,
      }: PayloadAction<{
        index: number
        show: boolean
      }>
    ) {
      let { index, show } = payload
      state.resumeJsonData.COMPONENTS[index].show = show
    },
    // 新增组件
    pushComponent(state, { payload }: PayloadAction<IMATERIALITEM>) {
      state.resumeJsonData.COMPONENTS.push(payload)
    },
    // 重置简历数据
    resetResumeJson() {
      return resumeJsonState
    },
  },
})

export const selectorResumeJsonData = (state: RootState) => state.resumeJson.resumeJsonData

export const changeResumeJsonData = resumeJsonSlice.actions.changeResumeJsonData
export const changeResumeJsonGlobalStyleData = resumeJsonSlice.actions.changeResumeJsonGlobalStyleData
export const changeResumeJsonModelData = resumeJsonSlice.actions.changeResumeJsonModelData
export const changeResumeJsonComponentSort = resumeJsonSlice.actions.changeResumeJsonComponentSort
export const changeResumeJsonComponentShow = resumeJsonSlice.actions.changeResumeJsonComponentShow
export const resetResumeJson = resumeJsonSlice.actions.resetResumeJson

export const resumeJson = resumeJsonSlice.reducer

const selectMaterialState = {
  cptName: '',
  cptOptionsName: '',
  cptTitle: '全局主题设置',
  cptKeyId: '',
}
// 选中的简历模块
const selectMaterialSlice = createSlice({
  name: 'selectMaterial',
  initialState: selectMaterialState,
  reducers: {
    // 更新
    updateSelectModel(
      state,
      {
        payload,
      }: PayloadAction<{
        cptName: string
        cptOptionsName: string
        cptTitle: string
        cptKeyId: string
      }>
    ) {
      return cloneDeep(payload)
    },
    // 重置
    resetSelectModel() {
      return selectMaterialState
    },
  },
})
export const selectorSelectMaterial = (state: RootState) => state.selectMaterial

export const updateSelectModel = selectMaterialSlice.actions.updateSelectModel
export const resetSelectModel = selectMaterialSlice.actions.resetSelectModel

export const selectMaterial = selectMaterialSlice.reducer
