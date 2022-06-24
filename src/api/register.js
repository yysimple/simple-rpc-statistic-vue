import {service} from "@/util/http";

export const listApp = (appName) => {
    const url = `registerCenter/listApp?appName=` + appName
    return service.post(url, appName)
}