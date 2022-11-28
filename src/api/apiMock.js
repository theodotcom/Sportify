class ApiMock {
    getPerformance(userId){
        return Promise.resolve([])
    }

    getActivity(userId){
        return Promise.resolve([])
    }

    getAverageSessions(userId){
        return Promise.resolve([])
    }

    getUser(userId){
        return Promise.resolve([])
    }
}

export default ApiMock