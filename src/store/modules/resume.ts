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
export const resetResumeJson = resumeJsonSlice.actions.resetResumeJson
export const changeResumeJsonGlobalStyleData = resumeJsonSlice.actions.changeResumeJsonGlobalStyleData

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
export const selectorCptTitle = (state: RootState) => state.selectMaterial.cptTitle

export const updateSelectModel = selectMaterialSlice.actions.updateSelectModel
export const resetSelectModel = selectMaterialSlice.actions.resetSelectModel

export const selectMaterial = selectMaterialSlice.reducer