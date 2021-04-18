import request from '@/utils/request'

export default {

    //获取课程分类
    getSubjects() {
        return request({
            url: `/eduservice/subject/getAllSubject`,
            method: 'get',
        })
    },
    
}

