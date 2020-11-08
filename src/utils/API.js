const API = {
    search: function (query) {
        if (!query) {
            return results;
        }
        else {
            return results.filter(item => {
                return item.name.toLowerCase().includes(query.toLowerCase());
            });
        }
    },
};

const results = 
[{"name":"Julie Fowler","email":"julie.fowler@example.com","img":"https://randomuser.me/api/portraits/thumb/women/21.jpg","phone":"017687 87449"},{"name":"Iemke Stoop","email":"iemke.stoop@example.com","img":"https://randomuser.me/api/portraits/thumb/women/59.jpg","phone":"(238)-143-8507"},{"name":"Lineu Martins","email":"lineu.martins@example.com","img":"https://randomuser.me/api/portraits/thumb/men/14.jpg","phone":"(06) 0320-2771"},{"name":"Mustafa Fournier","email":"mustafa.fournier@example.com","img":"https://randomuser.me/api/portraits/thumb/men/86.jpg","phone":"079 650 24 12"},{"name":"Clara Pastor","email":"clara.pastor@example.com","img":"https://randomuser.me/api/portraits/thumb/women/61.jpg","phone":"967-242-990"},{"name":"Nicolas Lemoine","email":"nicolas.lemoine@example.com","img":"https://randomuser.me/api/portraits/thumb/men/78.jpg","phone":"04-76-93-76-58"},{"name":"Tom Leclercq","email":"tom.leclercq@example.com","img":"https://randomuser.me/api/portraits/thumb/men/85.jpg","phone":"04-74-60-73-81"},{"name":"Gerald Obrien","email":"gerald.obrien@example.com","img":"https://randomuser.me/api/portraits/thumb/men/95.jpg","phone":"051-049-4781"},{"name":"Ingetraud Henrichs","email":"ingetraud.henrichs@example.com","img":"https://randomuser.me/api/portraits/thumb/women/90.jpg","phone":"0437-8642546"},{"name":"Juanita Reynolds","email":"juanita.reynolds@example.com","img":"https://randomuser.me/api/portraits/thumb/women/71.jpg","phone":"09-3600-5384"},{"name":"Arthur Wood","email":"arthur.wood@example.com","img":"https://randomuser.me/api/portraits/thumb/men/71.jpg","phone":"(746)-085-1045"},{"name":"Colette Francois","email":"colette.francois@example.com","img":"https://randomuser.me/api/portraits/thumb/women/36.jpg","phone":"078 744 08 84"},{"name":"Ausendo Cavalcanti","email":"ausendo.cavalcanti@example.com","img":"https://randomuser.me/api/portraits/thumb/men/56.jpg","phone":"(51) 5119-4865"},{"name":"Keith Williamson","email":"keith.williamson@example.com","img":"https://randomuser.me/api/portraits/thumb/men/43.jpg","phone":"01218 731386"},{"name":"Flavie Giraud","email":"flavie.giraud@example.com","img":"https://randomuser.me/api/portraits/thumb/women/17.jpg","phone":"02-51-74-94-96"},{"name":"Anthony Bennett","email":"anthony.bennett@example.com","img":"https://randomuser.me/api/portraits/thumb/men/22.jpg","phone":"05-0806-9988"},{"name":"Ava Mitchell","email":"ava.mitchell@example.com","img":"https://randomuser.me/api/portraits/thumb/women/53.jpg","phone":"861-476-7020"}];


export default API;
