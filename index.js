class EnhancedTreasureMap extends TreasureMap {
    static async exploreMysteriousCave() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.3) {
                    reject("�ڶ�Ѩ����ʧ�˷���");
                } else {
                    resolve("�����صĶ�Ѩ���ҵ���һ�Ź��ϵĵ�ͼ...");
                }
            }, 2500);
        });
    }

    static async solveRiddle(riddle) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!riddle) {
                    reject("û������ɽ⣡");
                }
                resolve("�⿪��������������ص�Կ��...");
            }, 1800);
        });
    }

    static async findSecretDoor(key) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!key) {
                    reject("û��Կ���޷������ţ�");
                }
                resolve("��Կ�״������ҵ���...");
            }, 2200);
        });
    }
}

async function findTreasureWithAsyncAwait() {
    try {
        let clue = await EnhancedTreasureMap.getInitialClue();
        console.log(clue);

        let location = await EnhancedTreasureMap.decodeAncientScript(clue);
        console.log(location);

        let caveResult = await EnhancedTreasureMap.exploreMysteriousCave();
        console.log(caveResult);

        let riddleSolution = await EnhancedTreasureMap.solveRiddle("���Ǹ�����");
        console.log(riddleSolution);

        let doorOpened = await EnhancedTreasureMap.findSecretDoor("һ�����ص�Կ��");
        console.log(doorOpened);

        let boxFound = await EnhancedTreasureMap.searchTemple("������������ܵص�");
        console.log(boxFound);

        let treasureFound = await EnhancedTreasureMap.openTreasureBox();
        console.log(treasureFound);
    } catch (error) {
        console.error("����ʧ��:", error);
    }
}

findTreasureWithAsyncAwait();