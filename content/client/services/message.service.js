(function () {
    'use strict'

    angular.module('client.services')
        .factory('messageService', MessageServiceFactory)

    MessageServiceFactory.$inject = ['$http', '$q']

    function MessageServiceFactory($http, $q) {
        return {
            readAll: readAll,
            create: create,
            update: update,
            delete: _delete
        }

        function readAll() {
            return $http.get('/api/messages')
                .then(dateChange => convertAllDates(dateChange))
                .catch(onError)
        }

        function create(messageData) {
            return $http.post('/api/messages', messageData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function update(messageData) {
            return $http.put(`/api/comments/${messageData._id}`, messageData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function _delete(id) {
            return $http.delete(`/api/messages/${id}`)
                .then(xhrSuccess)
                .catch(onError)
        }

        function xhrSuccess(response) {
            return response.data
        }



        function onError(error) {
            console.log(error.data)
            return $q.reject(error.data)
        }


        function convertAllDates(dateChange) {
            for (let x = 0; x < dateChange.data.length; x++) {
                dateChange.data[x].dateCreated = new Date(dateChange.data[x].dateCreated)
                dateChange.data[x].dateModified = new Date(dateChange.data[x].dateModified)
                if (dateChange.data[x].dateDeactivated !== null) {
                    dateChange.data[x].dateDeactivated = new Date(dateChange.data[x].dateDeactivated)
                }

            }
            return dateChange.data
        }

    }

})();