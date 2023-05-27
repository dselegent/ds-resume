// 注册每一个物料组件的属性面板
import BaseInfoOptionsCom from '@/options/BaseInfoOptions'
import EduBackgroundOptionsCom from '@/options/EduBackgroundOptions'
import JobIntentionOptionsCom from '@/options/JobIntentionOptions'
import SkillSpecialtiesOptionsCom from '@/options/SkillSpecialtiesOptions'
import CampusExperienceOptionsCom from '@/options/CampusExperienceOptions'
import WorkExperienceOptionsCom from '@/options/WorkExperienceOptions'
import ProjectExperienceOptionsCom from '@/options/ProjectExperienceOptions'
import AwardsOptionsCom from '@/options/AwardsOptions'
import HobbiesOptionsCom from '@/options/HobbiesOptions'
import SelfEvaluationOptionsCom from '@/options/SelfEvaluationOptions'
import WorksDisplayOptionsCom from '@/options/WorksDisplayOptions'

// 定义属性组件列表
const optionsComponents: any = {
  BASE_INFO_OPTIONS: BaseInfoOptionsCom,
  EDU_BACKGROUND_OPTIONS: EduBackgroundOptionsCom,
  JOB_INTENTION_OPTIONS: JobIntentionOptionsCom,
  SKILL_SPECIALTIES_OPTIONS: SkillSpecialtiesOptionsCom,
  CAMPUS_EXPERIENCE_OPTIONS: CampusExperienceOptionsCom,
  WORK_EXPERIENCE_OPTIONS: WorkExperienceOptionsCom,
  PROJECT_EXPERIENCE_OPTIONS: ProjectExperienceOptionsCom,
  AWARDS_OPTIONS: AwardsOptionsCom,
  HOBBIES_OPTIONS: HobbiesOptionsCom,
  SELF_EVALUATION_OPTIONS: SelfEvaluationOptionsCom,
  WORKS_DISPLAY_OPTIONS: WorksDisplayOptionsCom,
}

export default optionsComponents
