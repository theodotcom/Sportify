class ApiMock {
    getPerformance(userId) {
        if (userId ==='18'){
            return Promise.resolve({
                "data": {
                    "userId": 18,
                    "kind": {
                        "1": "cardio",
                        "2": "energy",
                        "3": "endurance",
                        "4": "strength",
                        "5": "speed",
                        "6": "intensity"
                    },
                    "data": [{"value": 70, "kind": 1}, {"value": 110, "kind": 2}, {"value": 140, "kind": 3}, {
                        "value": 50,
                        "kind": 4
                    }, {"value": 190, "kind": 5}, {"value": 80, "kind": 6}]
                }
            })
        }else{
        return Promise.resolve({
            "data": {
                "userId": 12,
                "kind": {
                    "1": "cardio",
                    "2": "energy",
                    "3": "endurance",
                    "4": "strength",
                    "5": "speed",
                    "6": "intensity"
                },
                "data": [{"value": 80, "kind": 1}, {"value": 120, "kind": 2}, {"value": 140, "kind": 3}, {
                    "value": 50,
                    "kind": 4
                }, {"value": 200, "kind": 5}, {"value": 90, "kind": 6}]
            }
        })
    }}

    getActivity(userId) {
        if (userId ==='18'){
            return Promise.resolve({
                "data": {
                    "userId": 18,
                    "sessions": [
                        {"day": "2020-07-01", "kilogram": 80, "calories": 240},
                        {
                            "day": "2020-07-02",
                            "kilogram": 110,
                            "calories": 320
                        }, {"day": "2020-07-03", "kilogram": 81, "calories": 280}, {
                            "day": "2020-07-04",
                            "kilogram": 71,
                            "calories": 290
                        }, {"day": "2020-07-05", "kilogram": 80, "calories": 160}, {
                            "day": "2020-07-06",
                            "kilogram": 65,
                            "calories": 162
                        }, {"day": "2020-07-07", "kilogram": 76, "calories": 390}]
                }
            })
        } else{
        return Promise.resolve({
            "data": {
                "userId": 12,
                "sessions": [
                    {"day": "2020-07-01", "kilogram": 80, "calories": 240},
                    {
                        "day": "2020-07-02",
                        "kilogram": 100,
                        "calories": 320
                    }, {"day": "2020-07-03", "kilogram": 81, "calories": 280}, {
                        "day": "2020-07-04",
                        "kilogram": 81,
                        "calories": 290
                    }, {"day": "2020-07-05", "kilogram": 80, "calories": 160}, {
                        "day": "2020-07-06",
                        "kilogram": 78,
                        "calories": 162
                    }, {"day": "2020-07-07", "kilogram": 76, "calories": 390}]
            }
        })
    }}

    getAverageSessions(userId) {
        if (userId ==='18'){
            return Promise.resolve({
                "data": {
                    "userId": 18,
                    "sessions": [{"day": 1, "sessionLength": 30}, {"day": 2, "sessionLength": 23}, {
                        "day": 3,
                        "sessionLength": 65
                    }, {"day": 4, "sessionLength": 50}, {"day": 5, "sessionLength": 0}, {
                        "day": 6,
                        "sessionLength": 0
                    }, {"day": 7, "sessionLength": 60}]
                }
            })
        } else{
        return Promise.resolve({
            "data": {
                "userId": 12,
                "sessions": [{"day": 1, "sessionLength": 30}, {"day": 2, "sessionLength": 23}, {
                    "day": 3,
                    "sessionLength": 45
                }, {"day": 4, "sessionLength": 50}, {"day": 5, "sessionLength": 0}, {
                    "day": 6,
                    "sessionLength": 0
                }, {"day": 7, "sessionLength": 60}]
            }
        })
    }}

    getUser(userId) {
        if (userId ==='18'){
        return Promise.resolve({
            "data": {
                "id": 18,
                "userInfos": {"firstName": "Jeanine", "lastName": "Doe", "age": 31},
                "todayScore": 0.12,
                "keyData": {"calorieCount": 1930, "proteinCount": 155, "carbohydrateCount": 290, "lipidCount": 50}
            }
        })}
        else {
             return Promise.resolve({
            "data": {
                "id": 12,
                "userInfos": {"firstName": "Johny", "lastName": "Doe", "age": 31},
                "todayScore": 0.12,
                "keyData": {"calorieCount": 1930, "proteinCount": 155, "carbohydrateCount": 290, "lipidCount": 50}
            }
        })
        }
    }
}

export default ApiMock