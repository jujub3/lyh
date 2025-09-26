class EnhancedTreasureMap extends TreasureMap {
    static async exploreMysteriousCave() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.3) {
                    reject("在洞穴中迷失了方向！");
                } else {
                    resolve("从神秘的洞穴中找到了一张古老的地图...");
                }
            }, 2500);
        });
    }

    static async solveRiddle(riddle) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!riddle) {
                    reject("没有谜语可解！");
                }
                resolve("解开了谜语，发现了隐藏的钥匙...");
            }, 1800);
        });
    }

    static async findSecretDoor(key) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!key) {
                    reject("没有钥匙无法打开密门！");
                }
                resolve("用钥匙打开了密室的门...");
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

        let riddleSolution = await EnhancedTreasureMap.solveRiddle("这是个谜语");
        console.log(riddleSolution);

        let doorOpened = await EnhancedTreasureMap.findSecretDoor("一把神秘的钥匙");
        console.log(doorOpened);

        let boxFound = await EnhancedTreasureMap.searchTemple("古老神庙的秘密地点");
        console.log(boxFound);

        let treasureFound = await EnhancedTreasureMap.openTreasureBox();
        console.log(treasureFound);
    } catch (error) {
        console.error("任务失败:", error);
    }
}

findTreasureWithAsyncAwait();