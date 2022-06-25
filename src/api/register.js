import {service} from "@/util/http";

export const listApp = (appName) => {
    const url = `registerCenter/listApp?appName=` + appName
    return service.post(url, appName)
}

export const listService = (serviceName) => {
    const url = `registerCenter/listApp?appName=` + serviceName
    return service.post(url, serviceName)
}