

/*페이지*/
let totalData = 1000;    // 총 데이터 수
let dataPerPage = 20;    // 한 페이지에 나타낼 데이터 수
let pageCount = 10;        // 한 화면에 나타낼 페이지 수

function paging(totalData, dataPerPage, pageCount, currentPage){
    
    console.log("currentPage : " + currentPage);
    
    let totalPage = Math.ceil(totalData/dataPerPage);    // 총 페이지 수
    let pageGroup = Math.ceil(currentPage/pageCount);    // 페이지 그룹
    
    console.log("pageGroup : " + pageGroup);
    
    let last = pageGroup * pageCount;    // 화면에 보여질 마지막 페이지 번호
    if(last > totalPage)
        last = totalPage;
    let first = last - (pageCount-1);    // 화면에 보여질 첫번째 페이지 번호
    let next = last+1;
    let prev = first-1;
    
    console.log("last : " + last);
    console.log("first : " + first);
    console.log("next : " + next);
    console.log("prev : " + prev);

    let $pingingView = $("#paging");
    
    let html = "";
    
    if(prev > 0)
        html += "<a href=# id='prev'><</a> ";
    
    for(let i=first; i <= last; i++){
        html += "<a href='#' id=" + i + ">" + i + "</a> ";
    }
    
    if(last < totalPage)
        html += "<a href=# id='next'>></a>";
    
    $("#paging").html(html);    // 페이지 목록 생성
    $("#paging a").css("color", "black");
    $("#paging a#" + currentPage).css({"text-decoration":"none", 
                                       "color":"red", 
                                       "font-weight":"bold"});    // 현재 페이지 표시
                                       
    $("#paging a").click(function(){
        
        let $item = $(this);
        let $id = $item.attr("id");
        let selectedPage = $item.text();
        
        if($id == "next")    selectedPage = next;
        if($id == "prev")    selectedPage = prev;
        
        paging(totalData, dataPerPage, pageCount, selectedPage);
    });
                                       
}

$("document").ready(function(){        
    paging(totalData, dataPerPage, pageCount, 1);
});

/* 체크박스 체크하면 수정가능하게 input태그 변경해주는 함수 */
$(document).ready(function(){

	$("#product1").click(function(){
		if(this.checked){
			$(".product1").prop("disabled",false);
		}
        else{
            $(".product1").prop("disabled","disabled");
        }
	});
	$("#product2").click(function(){
		if(this.checked){
			$(".product2").prop("disabled",false);
		}
        else{
            $(".product2").prop("disabled","disabled");
        }
	});
    $("#product3").click(function(){
		if(this.checked){
			$(".product3").prop("disabled",false);
		}
        else{
            $(".product3").prop("disabled","disabled");
        }
	});
    $("#product4").click(function(){
		if(this.checked){
			$(".product4").prop("disabled",false);
		}
        else{
            $(".product4").prop("disabled","disabled");
        }
	});
    $("#product5").click(function(){
		if(this.checked){
			$(".product5").prop("disabled",false);
		}
        else{
            $(".product5").prop("disabled","disabled");
        }
	});
    $("#product6").click(function(){
		if(this.checked){
			$(".product6").prop("disabled",false);
		}
        else{
            $(".product6").prop("disabled","disabled");
        }
	});
    $("#product7").click(function(){
		if(this.checked){
			$(".product7").prop("disabled",false);
		}
        else{
            $(".product7").prop("disabled","disabled");
        }
	});
    $("#product8").click(function(){
		if(this.checked){
			$(".product8").prop("disabled",false);
		}
        else{
            $(".product8").prop("disabled","disabled");
        }
	});
    $("#product9").click(function(){
		if(this.checked){
			$(".product9").prop("disabled",false);
		}
        else{
            $(".product9").prop("disabled","disabled");
        }
	});

});