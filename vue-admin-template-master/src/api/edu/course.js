import request from '@/utils/request'

export default {

    //获取课程分类
    addCourseInfo(courseInfo) {
        return request({
            url: `/eduservice/course/addCourseInfo`,
            method: 'post',
            data: courseInfo
        })
    },
    //查询所有讲师
    getListTeacher() {
        return request({
            url: `/eduservice/teacher/findAll`,
            method: 'get'
        })
    },
    //根据课程id查询课程基本信息
    getCourseInfoById(id) {
        return request({
            url: `/eduservice/course/getCourseInfo/${id}`,
            method: 'get'
        })
    },

    //修改课程信息
    updateCourseInfoById(courseInfo) {
        return request({
            url: `/eduservice/course/updateCourseInfo`,
            method: 'post',
            data: courseInfo
        })
    },

    //课程信息确认显示
    getPublishCourseInfo(courseId) {
        return request({
            url: `/eduservice/course/getPublishCourseId/${courseId}`,
            method: 'get'
        })
    },

    //课程最终发布
    publishCourseInfo(courseId) {
        return request({
            url: `/eduservice/course/publishCourse/${courseId}`,
            method: 'post'
        })
    },

    //获得所有课程
    getListCourse() {
        request({
            url: `/eduservice/course`,
            method: 'get'
        })
    },
    
    //TODO 课程列表
    getListCoursePage(current, limit, courseQuery) {
        return request({
            //url: '/table/list/' + current + '/' + limit,
            url: `/eduservice/course/pageCourseCondition/${current}/${limit}`,
            method: 'post',
            //条件对象，后端用RequestBody获取对象
            //data表示把对象转换成json传递到接口里面
            data: courseQuery
        })
    },

    //删除课程
    deleteCourseInfo(courseId) {
        return request({
            url: `/eduservice/course/${courseId}`,
            method: 'delete'
        })
    }
}