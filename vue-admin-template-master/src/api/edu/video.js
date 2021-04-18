import request from '@/utils/request'

export default {
    //添加小节
    addVideo(video) {
        return request({
            url: `/eduservice/video/addVideo`,
            method: 'post',
            data: video
        })
    },
    //删除小节
    deleteVideo(videoId) {
        return request({
            url: `/eduservice/video/${videoId}`,
            method: 'delete'
        })
    },

    //删除阿里云中的视频
    deleteAlyVideo(videoId) {
        return request({
            url: `/eduvod/video/removeVideo/${videoId}`,
            method: 'delete'
        })
    }
}
